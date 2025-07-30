import React, { useState } from "react";

export default function NestedFolder({ data,level=0 }) {
  return (
    <div>
      {data.map((item, index) => (
        <FolderOrFile key={index} item={item} level={level} />
      ))}
    </div>
  );
}

function FolderOrFile({ item ,level}) {
  const [isOpen, setIsOpen] = useState(item.isOpen || false);
  const marginLeft = `${item.   level * 20}px`;

  if (item.type === "folder") {
    return (
      <div style={{ marginLeft }}>
        <div onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "▾ 📂 " : "▸ 📁 "}
          {item.label}
        </div>
        {isOpen && item.childs && item.childs.length > 0 && (
          <NestedFolder data={item.childs} level={level+1}/>
        )}
      </div>
    );
  }

  return (
    <div style={{ marginLeft}}>
      📄 {item.label}
    </div>
  );
}
