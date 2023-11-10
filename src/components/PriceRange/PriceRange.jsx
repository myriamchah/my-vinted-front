import { useState } from "react";
import { Range } from "react-range";

const PriceRange = ({ setRange }) => {
  const [values, setValues] = useState([0, 100]);

  return (
    <>
      <Range
        step={1}
        min={0}
        max={500}
        values={values}
        onChange={(values) => setValues(values)}
        onFinalChange={(values) => setRange(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "50%",
              backgroundColor: "#ccc",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "8px",
              width: "8px",
              borderRadius: "50%",
              backgroundColor: "#037682",
            }}
          />
        )}
      />
    </>
  );
};

export default PriceRange;
