import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { clearFormData } from '../../redux/Action';

// table style
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Result = ({ formData, clearFormData }) => {
  const classes = useStyles();

  // generating pdf from result table
  const printDocument = () => {
    const input = document.getElementById('pdfdiv');
    html2canvas(input).then((canvas) => {
      var imgWidth = 190;
      // eslint-disable-next-line
      var pageHeight = 290;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      // eslint-disable-next-line
      var heightLeft = imgHeight;
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      pdf.save('result.pdf');
    });
  };

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <p style={{ fontSize: '1.1rem' }}>Result</p>
      <TableContainer id="pdfdiv" component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Project Name</TableCell>
              <TableCell align="right">Project Description</TableCell>
              <TableCell align="right">Client</TableCell>
              <TableCell align="right">Contractor</TableCell>
              <TableCell align="right">Max X</TableCell>
              <TableCell align="right">Min X</TableCell>
              <TableCell align="right">Max Y</TableCell>
              <TableCell align="right">Min Y</TableCell>
              <TableCell align="right">Max Z</TableCell>
              <TableCell align="right">Min Z</TableCell>
            </TableRow>
          </TableHead>
          {formData && (
            <TableBody>
              <TableRow key={formData.name}>
                <TableCell component="th" scope="row">
                  {formData.projectName}
                </TableCell>
                <TableCell align="right">
                  {formData.projectDescription}
                </TableCell>
                <TableCell align="right">{formData.client}</TableCell>
                <TableCell align="right">{formData.contractor}</TableCell>
                <TableCell align="right">{formData.max_x}</TableCell>
                <TableCell align="right">{formData.min_x}</TableCell>
                <TableCell align="right">{formData.max_y}</TableCell>
                <TableCell align="right">{formData.min_y}</TableCell>
                <TableCell align="right">{formData.max_z}</TableCell>
                <TableCell align="right">{formData.min_z}</TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>
      <div
        style={{
          marginTop: '1.5rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <Button variant="outlined" onClick={printDocument}>
          Download As PDF
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            clearFormData();
          }}
        >
          Generate Another Report
        </Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearFormData: () => dispatch(clearFormData()),
});

const mapStateToProps = (state) => ({
  formData: state.formData,
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
