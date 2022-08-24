const { useState, useEffect } = React;

const World = () => {
  const [countries, setCountries] = useState({ features: [] });

  useEffect(() => {
    fetch("./data/data.geojson")
      .then((res) => res.json())
      .then(setCountries);
  }, []);

  return (
    <Globe
      backgroundColor={'#000000'}
      hexPolygonsData={countries.features}
      hexPolygonResolution={3}
      hexPolygonMargin={0.7}
      hexPolygonColor={() => `#B45D6B`}
    />
  );
};

ReactDOM.render(<World />, document.getElementById("globe"));
