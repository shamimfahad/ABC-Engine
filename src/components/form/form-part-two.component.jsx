import React from 'react';

import { CSVReader } from 'react-papaparse';

const buttonRef = React.createRef();

const FormSecondPart = ({ nextStep, prevStep, handleChange, formData }) => {
  const [csvData, setCsvData] = React.useState([]);
  React.useEffect(() => {
    const x = csvData.map((single, index) => {
      return Number(single['data']['1']);
    });
    const y = csvData.map((single, index) => {
      return Number(single['data']['2']);
    });
    const z = csvData.map((single, index) => {
      return Number(single['data']['3']);
    });
    x.shift();
    y.shift();
    z.shift();
    const getMin = (obj) => {
      return Object.keys(obj).reduce((acc, val) => {
        return obj[val] < acc ? obj[val] : acc;
      }, Infinity);
    };
    const getMax = (obj) => {
      return Object.keys(obj).reduce((acc, val) => {
        return obj[val] > acc ? obj[val] : acc;
      }, -Infinity);
    };
    const min_x = getMin(x);
    const max_x = getMax(x);
    const min_y = getMin(y);
    const max_y = getMax(y);
    const min_z = getMin(z);
    const max_z = getMax(z);

    console.log(csvData, min_x, max_x, min_y, max_y, min_z, max_z);
  }, [csvData]);
  const handleOpenDialog = (e) => {
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };
  const handleOnFileLoad = (data) => {
    setCsvData(data);
    // console.log('---------------------------');
    // console.log(data);
    // console.log('---------------------------');
  };
  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const handleOnRemoveFile = (data) => {
    console.log('---------------------------');
    console.log(data);
    console.log('---------------------------');
  };

  const handleRemoveFile = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
      }}
    >
      <div style={{ width: '350px' }}>
        <CSVReader
          ref={buttonRef}
          onFileLoad={handleOnFileLoad}
          onError={handleOnError}
          noClick
          noDrag
          onRemoveFile={handleOnRemoveFile}
        >
          {({ file }) => (
            <aside
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 10,
              }}
            >
              <button
                type="button"
                onClick={handleOpenDialog}
                style={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  width: '40%',
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                Browse file
              </button>
              <div
                style={{
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#ccc',
                  height: 45,
                  lineHeight: 2.5,
                  marginTop: 5,
                  marginBottom: 5,
                  paddingLeft: 13,
                  paddingTop: 3,
                  width: '60%',
                }}
              >
                {file && file.name}
              </div>
              <button
                style={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
                onClick={handleRemoveFile}
              >
                Remove
              </button>
            </aside>
          )}
        </CSVReader>
      </div>
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <p>Min X</p>
          <input
            type="text"
            name="min_x"
            id="min_x"
            onChange={handleChange}
            value={formData.min_x && formData.min_x}
          />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <p>Max X</p>
          <input
            type="text"
            name="max_x"
            id="max_x"
            onChange={handleChange}
            value={formData.max_x && formData.max_x}
          />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <p>Min Y</p>
          <input
            type="text"
            name="min_y"
            id="min_y"
            onChange={handleChange}
            value={formData.min_y && formData.min_y}
          />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <p>Max Y</p>
          <input
            type="text"
            name="max_y"
            id="max_y"
            onChange={handleChange}
            value={formData.max_y && formData.max_y}
          />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <p>Min Z</p>
          <input
            type="text"
            name="min_z"
            id="min_z"
            onChange={handleChange}
            value={formData.min_z && formData.min_z}
          />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <p>Max Z</p>
          <input
            type="text"
            name="max_z"
            id="max_z"
            onChange={handleChange}
            value={formData.max_z && formData.max_z}
          />
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            prevStep();
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            nextStep();
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FormSecondPart;
