export function BrandLogo() {
  return (
    <span className="brand-lockup">
      <img
        src={`${import.meta.env.BASE_URL}images/logo-display.webp`}
        alt="Logo oficial BS Trainer Studio"
        width="361"
        height="640"
      />
      <span className="brand-name">
        BS Trainer{" "}<span>Studio Personal</span>
      </span>
    </span>
  );
}
