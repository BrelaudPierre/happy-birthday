const { useState, useEffect } = React;

const World = () => {
  const [countries, setCountries] = useState({ features: [] });

  useEffect(() => {
    fetch("./data/data.geojson")
      .then((res) => res.json())
      .then(setCountries);
  }, []);

  const markerSvg = `<svg viewBox="-4 0 36 36">
  <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
  <circle fill="black" cx="14" cy="14" r="7"></circle>
</svg>`;

  const N = 30;
  const gData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: 20,
    color: ["#77344A"],
  }));

  return (
    <Globe
      backgroundColor={"#000000"}
      hexPolygonsData={countries.features}
      hexPolygonResolution={3}
      hexPolygonMargin={0.7}
      hexPolygonColor={() => `#B45D6B`}
      htmlElementsData={gData}
      htmlElement={(d) => {
        const el = document.createElement("div");
        el.innerHTML = markerSvg;
        el.style.color = d.color;
        el.style.width = `${d.size}px`;

        el.style["pointer-events"] = "auto";
        el.style.cursor = "pointer";
        el.onclick = () => console.info(d);
        return el;
      }}
    />
  );
};

ReactDOM.render(<World />, document.getElementById("globe"));
