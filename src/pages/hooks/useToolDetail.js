import { useEffect, useState } from "react";

const useToolDetail = toolId => {
  const [tool, setTool] = useState({});

  useEffect(() => {
    const url = `https://frozen-ocean-66144.herokuapp.com/tool/${toolId}`;

    fetch(url)
      .then(res => res.json())
      .then(data => setTool(data));
  }, [toolId]);
  return [tool];
};
export default useToolDetail;
