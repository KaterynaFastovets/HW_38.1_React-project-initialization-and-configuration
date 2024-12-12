import React, { useState } from "react";

function StatefulComponent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>2. Stateful Component</h4>
      <p>Ви натиснули {count} разів</p>
      <button onClick={() => setCount(count + 1)}>Натисни тут</button>
    </div>
  );
}

export default StatefulComponent;
