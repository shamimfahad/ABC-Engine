import React from 'react';
import { connect } from 'react-redux';
import { CSVReader } from 'react-papaparse';
import Button from '@material-ui/core/Button';

import { setChartData, setFormData } from '../../redux/Action';

import Chart from '../chart/chart.component';
import { containerStyle, inputRowStyle } from './form-part-one.component';

const buttonRef = React.createRef();

const FormSecondPart = ({
  nextStep,
  prevStep,
  handleChange,
  formData,
  setFormData,
  setChartData,
}) => {
  const [csvData, setCsvData] = React.useState([]);
  const [disabled, setDisabled] = React.useState(false);
  const [showChart, setShowChart] = React.useState(false);

  // extracting data from csv file also updating state as we read data from the file
  React.useEffect(() => {
    const kp = csvData.map((single) => {
      return Number(single['data']['0']);
    });
    const x = csvData.map((single) => {
      return Number(single['data']['1']);
    });
    const y = csvData.map((single) => {
      return Number(single['data']['2']);
    });
    const z = csvData.map((single) => {
      return Number(single['data']['3']);
    });
    kp.shift();
    x.shift();
    y.shift();
    z.shift();

    const chartData = { kp, x, y, z };
    setChartData(chartData);

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

    if (csvData.length > 0) {
      // setting form Data, disabling input fields and showing chart
      setFormData({ ...formData, min_x, min_y, min_z, max_x, max_y, max_z });
      setDisabled(true);
      setShowChart(true);
    }
    // eslint-disable-next-line
  }, [csvData]);
  const handleOpenDialog = (e) => {
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };
  // setting csvData on file load
  const handleOnFileLoad = (data) => {
    setCsvData(data);
  };
  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const handleOnRemoveFile = (data) => {
    // allowing users to input values manually and hiding chart as one removes the csv file
    setDisabled(false);
    setShowChart(false);
  };

  const handleRemoveFile = (e) => {
    // Note that the ref is set async, so it might be null at some point
    e.preventDefault();
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
    }
  };
  return (
    // form second part with csv reader
    <form
      onSubmit={(e) => {
        e.preventDefault();
        nextStep();
      }}
    >
      <div style={containerStyle}>
        <p>Part Two</p>
        <div style={{ width: '80%' }}>
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
                    border: '0.5px solid #000',
                    borderRadius: '5px',
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
                    height: 30,
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
                    border: '0.5px solid #000',
                    borderRadius: '5px',
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
          <div style={inputRowStyle}>
            <p>Max X</p>
            <input
              type="text"
              name="max_x"
              id="max_x"
              onChange={handleChange}
              value={formData.max_x && formData.max_x}
              style={{ margin: '0.5rem 0' }}
              required
              disabled={disabled}
            />
          </div>
          <div style={inputRowStyle}>
            <p>Min X</p>
            <input
              type="text"
              name="min_x"
              id="min_x"
              onChange={handleChange}
              value={formData.min_x && formData.min_x}
              style={{ margin: '0.5rem 0' }}
              required
              disabled={disabled}
            />
          </div>

          <div style={inputRowStyle}>
            <p>Max Y</p>
            <input
              type="text"
              name="max_y"
              id="max_y"
              onChange={handleChange}
              value={formData.max_y && formData.max_y}
              style={{ margin: '0.5rem 0' }}
              required
              disabled={disabled}
            />
          </div>
          <div style={inputRowStyle}>
            <p>Min Y</p>
            <input
              type="text"
              name="min_y"
              id="min_y"
              onChange={handleChange}
              value={formData.min_y && formData.min_y}
              style={{ margin: '0.5rem 0' }}
              required
              disabled={disabled}
            />
          </div>
          <div style={inputRowStyle}>
            <p>Max Z</p>
            <input
              type="text"
              name="max_z"
              id="max_z"
              onChange={handleChange}
              value={formData.max_z && formData.max_z}
              style={{ margin: '0.5rem 0' }}
              required
              disabled={disabled}
            />
          </div>
          <div style={inputRowStyle}>
            <p>Min Z</p>
            <input
              type="text"
              name="min_z"
              id="min_z"
              onChange={handleChange}
              value={formData.min_z && formData.min_z}
              style={{ margin: '0.5rem 0' }}
              required
              disabled={disabled}
            />
          </div>
        </div>
        {showChart && <Chart />}
        {/* navigator */}
        <div style={{ display: 'flex', gap: '0.4rem' }}>
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              prevStep();
            }}
          >
            Prev
          </Button>
          <Button variant="outlined" size="small" type="submit">
            View Result
          </Button>
        </div>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setChartData: (data) => dispatch(setChartData(data)),
  setFormData: (data) => dispatch(setFormData(data)),
});

const mapStateToProps = (state) => ({
  formData: state.formData,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormSecondPart);
