import React from "react"

import CloudflareLogo from "./cloudflare-logo"
import DocsNavLogoLockup from "./docs-nav-logo-lockup"

const DocsSidebarHeaderSection = () => (
  <div className="DocsSidebar--section DocsSidebar--header-section">
    <a className="DocsSidebar--cloudflare-logo-link DocsSidebar--link" href="https://cv2.pages.dev/">
      <DocsNavLogoLockup
        logo={<CloudflareLogo/>}
        text={(
          <>
            <span data-text="CV2">Cloudflare</span>
            <span>&nbsp;</span>
            <span data-text="Docs">Docs</span>
          </>
        )}
      />
    </a>
  </div>
)

export default DocsSidebarHeaderSection
