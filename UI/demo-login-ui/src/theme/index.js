export const getCurrentTheme = () => {
  const html = document.querySelector("html");
  const currentTeam = html.getAttribute("data-bs-theme");
  return currentTeam ?? "light";
};
export const populateTheme = (switchTo) => {
  const html = document.querySelector("html");
  html.setAttribute("data-bs-theme", switchTo);
  const rootDoc = document.documentElement;
  const rootStyles = getComputedStyle(rootDoc);

  rootDoc.style.setProperty(
    "--color-surface",
    rootStyles.getPropertyValue(
      `--color-surface${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-primary",
    rootStyles.getPropertyValue(
      `--color-primary${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-complementary",
    rootStyles.getPropertyValue(
      `--color-complementary${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-complementary-text",
    rootStyles.getPropertyValue(
      `--color-complementary-text${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-accent-hover",
    rootStyles.getPropertyValue(
      `--color-accent-hover${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-accent",
    rootStyles.getPropertyValue(
      `--color-accent${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-accent-ctrl",
    rootStyles.getPropertyValue(
      `--color-accent-ctrl${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-accent-alt",
    rootStyles.getPropertyValue(
      `--color-accent-alt${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-accent-shift",
    rootStyles.getPropertyValue(
      `--color-accent-shift${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-secondary",
    rootStyles.getPropertyValue(
      `--color-secondary${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-secondary-ctrl",
    rootStyles.getPropertyValue(
      `--color-secondary-ctrl${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-secondary-alt",
    rootStyles.getPropertyValue(
      `--color-secondary-alt${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-secondary-alt-hover",
    rootStyles.getPropertyValue(
      `--color-secondary-alt-hover${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-secondary-alt-plus",
    rootStyles.getPropertyValue(
      `--color-secondary-alt-plus${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-secondary-alt-plus-hover",
    rootStyles.getPropertyValue(
      `--color-secondary-alt-plus-hover${
        switchTo === "dark" ? "-dark" : "-light"
      }`
    )
  );
  rootDoc.style.setProperty(
    "--color-secondary-shift",
    rootStyles.getPropertyValue(
      `--color-secondary-shift${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-secondary-tab",
    rootStyles.getPropertyValue(
      `--color-secondary-tab${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-secondary-title-text",
    rootStyles.getPropertyValue(
      `--color-secondary-title-text${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-secondary-sub-title-text",
    rootStyles.getPropertyValue(
      `--color-secondary-sub-title-text${
        switchTo === "dark" ? "-dark" : "-light"
      }`
    )
  );
  rootDoc.style.setProperty(
    "--color-secondary-hover",
    rootStyles.getPropertyValue(
      `--color-secondary-hover${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-secondary-hover-text",
    rootStyles.getPropertyValue(
      `--color-secondary-hover-text${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-secondary-active",
    rootStyles.getPropertyValue(
      `--color-secondary-active${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-secondary-active-text",
    rootStyles.getPropertyValue(
      `--color-secondary-active-text${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-secondary-section-title",
    rootStyles.getPropertyValue(
      `--color-secondary-section-title${
        switchTo === "dark" ? "-dark" : "-light"
      }`
    )
  );
  rootDoc.style.setProperty(
    "--color-secondary-section-sub-title",
    rootStyles.getPropertyValue(
      `--color-secondary-section-sub-title${
        switchTo === "dark" ? "-dark" : "-light"
      }`
    )
  );
  rootDoc.style.setProperty(
    "--color-even",
    rootStyles.getPropertyValue(
      `--color-even${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-odd",
    rootStyles.getPropertyValue(
      `--color-odd${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-disabled",
    rootStyles.getPropertyValue(
      `--color-disabled${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-disabled-alt",
    rootStyles.getPropertyValue(
      `--color-disabled-alt${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-box-shadow",
    rootStyles.getPropertyValue(
      `--color-box-shadow${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-box-border",
    rootStyles.getPropertyValue(
      `--color-box-border${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-unread",
    rootStyles.getPropertyValue(
      `--color-unread${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-read",
    rootStyles.getPropertyValue(
      `--color-read${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-backdrop",
    rootStyles.getPropertyValue(
      `--color-backdrop${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-hover",
    rootStyles.getPropertyValue(
      `--color-hover${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-hover-active-text",
    rootStyles.getPropertyValue(
      `--color-hover-active-text${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-active",
    rootStyles.getPropertyValue(
      `--color-active${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-pagination-border",
    rootStyles.getPropertyValue(
      `--color-pagination-border${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-overlay-spinner",
    rootStyles.getPropertyValue(
      `--color-overlay-spinner${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-overlay",
    rootStyles.getPropertyValue(
      `--color-overlay${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-overlay-text-container",
    rootStyles.getPropertyValue(
      `--color-overlay-text-container${
        switchTo === "dark" ? "-dark" : "-light"
      }`
    )
  );
  rootDoc.style.setProperty(
    "--color-overlay-text",
    rootStyles.getPropertyValue(
      `--color-overlay-text${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-icon-btn",
    rootStyles.getPropertyValue(
      `--color-icon-btn${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-icon-btn-hover",
    rootStyles.getPropertyValue(
      `--color-icon-btn-hover${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-bar",
    rootStyles.getPropertyValue(
      `--color-bar${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-bar-border",
    rootStyles.getPropertyValue(
      `--color-bar-border${switchTo === "dark" ? "-dark" : "-light"}`
    )
  );
  rootDoc.style.setProperty(
    "--color-hover-option-multi-select",
    rootStyles.getPropertyValue(
      `--color-hover-option-multi-select${
        switchTo === "dark" ? "-dark" : "-light"
      }`
    )
  );
  rootDoc.style.setProperty(
    "--color-option-multi-select-remove",
    rootStyles.getPropertyValue(
      `--color-option-multi-select-remove${
        switchTo === "dark" ? "-dark" : "-light"
      }`
    )
  );
};
