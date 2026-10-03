(function() {
  // DOM Elements
  const searchInput = document.getElementById('facultySearchInput');
  const deptFilter = document.getElementById('deptFilter');
  const toggleOverridesBtn = document.getElementById('toggleOverridesOnly');
  const overrideCountBadge = document.getElementById('overrideCountBadge');
  const facultyRows = document.querySelectorAll('.faculty-row');
  const facultyCountLabel = document.getElementById('facultyCountLabel');
  const emptyState = document.getElementById('emptySearchResults');
  const clearFiltersBtn = document.getElementById('clearFiltersBtn');
  const restoreAllBtn = document.getElementById('restoreAllBtn');
  const auditLogBtn = document.getElementById('auditLogBtn');
  const permToast = document.getElementById('permToast');
  const toastMessage = document.getElementById('toastMessage');
  const closeToastBtn = document.getElementById('closeToastBtn');

  let filterOverridesOnly = false;
  let toastTimeout = null;

  // Toast Utility
  function showToast(message) {
    if (toastTimeout) clearTimeout(toastTimeout);
    toastMessage.textContent = message;
    permToast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
    permToast.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');

    toastTimeout = setTimeout(() => {
      hideToast();
    }, 4000);
  }

  function hideToast() {
    permToast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
    permToast.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
  }

  closeToastBtn.addEventListener('click', hideToast);

  // Update Overrides Calculation
  function refreshOverrideStates() {
    let activeOverrideTotal = 0;

    facultyRows.forEach(row => {
      const toggles = row.querySelectorAll('.perm-toggle');
      let isOverridden = false;

      toggles.forEach(toggle => {
        const isDefault = toggle.getAttribute('data-default') === 'true';
        if (toggle.checked !== isDefault) {
          isOverridden = true;
        }
      });

      row.setAttribute('data-customized', isOverridden ? 'true' : 'false');
      const badge = row.querySelector('.customized-badge');
      const actionCell = row.querySelector('td:last-child');

      if (isOverridden) {
        activeOverrideTotal++;
        if (badge) badge.classList.remove('hidden');
        // Update action cell to show Reset button
        actionCell.innerHTML = `
          <button class="reset-row-btn inline-flex items-center gap-1 text-label-sm font-label-sm text-secondary hover:text-on-surface transition-colors" title="Revert to Faculty baseline defaults">
            <span class="material-symbols-outlined text-[16px]">undo</span>
            <span>Reset</span>
          </button>
        `;
        bindResetBtn(actionCell.querySelector('.reset-row-btn'), row);
      } else {
        if (badge) badge.classList.add('hidden');
        actionCell.innerHTML = `
          <span class="inline-flex items-center gap-1 text-label-sm font-label-sm text-on-surface-variant/60">
            <span class="material-symbols-outlined text-[15px]">check_circle</span>
            <span>Default</span>
          </span>
        `;
      }
    });

    overrideCountBadge.textContent = `${activeOverrideTotal} Active`;
    filterRows();
  }

  function bindResetBtn(btn, row) {
    if (!btn) return;
    btn.addEventListener('click', () => {
      const staffName = row.getAttribute('data-name');
      const toggles = row.querySelectorAll('.perm-toggle');

      toggles.forEach(toggle => {
        const isDefault = toggle.getAttribute('data-default') === 'true';
        toggle.checked = isDefault;
        const label = toggle.closest('label').querySelector('.state-label');
        if (label) {
          label.textContent = isDefault ? 'Visible' : 'Hidden';
          label.className = `ml-2 font-code-sm text-[12px] text-on-surface-variant state-label`;
        }
      });

      refreshOverrideStates();
      showToast(`Reset permissions for ${staffName} to default institutional baseline`);
    });
  }

  // Toggle Interaction Handler
  document.querySelectorAll('.perm-toggle').forEach(toggle => {
    toggle.addEventListener('change', (e) => {
      const staff = e.target.getAttribute('data-staff');
      const tab = e.target.getAttribute('data-tab');
      const isChecked = e.target.checked;
      const isDefault = e.target.getAttribute('data-default') === 'true';

      // Update Label
      const label = e.target.closest('label').querySelector('.state-label');
      if (label) {
        if (isChecked) {
          label.textContent = isDefault ? 'Visible' : 'Granted';
          label.className = `ml-2 font-code-sm text-[12px] ${isDefault ? 'text-on-surface-variant' : 'text-secondary font-semibold'} state-label`;
        } else {
          label.textContent = 'Hidden';
          label.className = `ml-2 font-code-sm text-[12px] text-on-surface-variant state-label`;
        }
      }

      refreshOverrideStates();
      showToast(`✓ Permission updated: ${staff} — '${tab}' set to ${isChecked ? 'Visible' : 'Hidden'}`);
    });
  });

  // Reset All Buttons
  restoreAllBtn.addEventListener('click', () => {
    facultyRows.forEach(row => {
      row.querySelectorAll('.perm-toggle').forEach(toggle => {
        const isDefault = toggle.getAttribute('data-default') === 'true';
        toggle.checked = isDefault;
        const label = toggle.closest('label').querySelector('.state-label');
        if (label) {
          label.textContent = isDefault ? 'Visible' : 'Hidden';
          label.className = `ml-2 font-code-sm text-[12px] text-on-surface-variant state-label`;
        }
      });
    });

    refreshOverrideStates();
    showToast("All faculty permissions restored to baseline role defaults");
  });

  // Row-level Reset buttons initialization
  document.querySelectorAll('.reset-row-btn').forEach(btn => {
    const row = btn.closest('.faculty-row');
    bindResetBtn(btn, row);
  });

  // Filtering Logic
  function filterRows() {
    const query = searchInput.value.toLowerCase().trim();
    const selectedDept = deptFilter.value;
    let visibleCount = 0;

    facultyRows.forEach(row => {
      const name = row.getAttribute('data-name').toLowerCase();
      const id = row.getAttribute('data-id').toLowerCase();
      const dept = row.getAttribute('data-dept');
      const isCustomized = row.getAttribute('data-customized') === 'true';

      const matchesSearch = name.includes(query) || id.includes(query) || dept.toLowerCase().includes(query);
      const matchesDept = selectedDept === 'all' || dept === selectedDept;
      const matchesOverrides = !filterOverridesOnly || isCustomized;

      if (matchesSearch && matchesDept && matchesOverrides) {
        row.classList.remove('hidden');
        visibleCount++;
      } else {
        row.classList.add('hidden');
      }
    });

    facultyCountLabel.textContent = `Showing ${visibleCount} Faculty Members`;

    if (visibleCount === 0) {
      emptyState.classList.remove('hidden');
      emptyState.classList.add('flex');
    } else {
      emptyState.classList.add('hidden');
      emptyState.classList.remove('flex');
    }
  }

  searchInput.addEventListener('input', filterRows);
  deptFilter.addEventListener('change', filterRows);

  toggleOverridesBtn.addEventListener('click', () => {
    filterOverridesOnly = !filterOverridesOnly;
    if (filterOverridesOnly) {
      toggleOverridesBtn.classList.add('bg-secondary-container/50', 'text-on-secondary-container');
      toggleOverridesBtn.classList.remove('bg-surface-container-low', 'text-on-surface');
    } else {
      toggleOverridesBtn.classList.remove('bg-secondary-container/50', 'text-on-secondary-container');
      toggleOverridesBtn.classList.add('bg-surface-container-low', 'text-on-surface');
    }
    filterRows();
  });

  clearFiltersBtn.addEventListener('click', () => {
    searchInput.value = '';
    deptFilter.value = 'all';
    filterOverridesOnly = false;
    toggleOverridesBtn.classList.remove('bg-secondary-container/50', 'text-on-secondary-container');
    toggleOverridesBtn.classList.add('bg-surface-container-low', 'text-on-surface');
    filterRows();
  });

  auditLogBtn.addEventListener('click', () => {
    showToast("Access log export: Last authorization audit timestamped 14 mins ago");
  });

  // Ensure Supervisor active nav link indication inside App Shell
  const navLinks = document.querySelectorAll('aside nav a');
  navLinks.forEach(link => {
    if (link.getAttribute('data-path') === 'access-control') {
      link.className = "flex items-center px-space-md py-space-sm rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold";
      const icon = link.querySelector('.material-symbols-outlined');
      if (icon) icon.classList.add('text-secondary');
    } else {
      link.className = "flex items-center px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-md text-body-md";
      const icon = link.querySelector('.material-symbols-outlined');
      if (icon) icon.classList.remove('text-secondary');
    }
  });

  refreshOverrideStates();
})();
