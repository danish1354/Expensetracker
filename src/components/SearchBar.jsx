// import React, { useState } from 'react'

// export default function SearchBar() {
//     const [query, setQuery] = useState("");
//     return (
//         <input type="search"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)} />
//     );
// }
import React, { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="search">
      <input
        className="search__input"
        type="search"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
