import React, { useState } from "react";

export default function SidebarState({ callBack }) {
  const [sidebar, setSidebar] = useState(true);

  return <>{callBack}</>;
}
