import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const LstTable = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      event: 'Frozen yoghurt',
      onset: 'Immediate',
      duration: 'Short',
      lifeSpace: 'Home',
      characteristics: 'Sweet',
      cause: 'Unknown',
      attributes: 'None',
      interpretation: 'Delicious',
    },
  ]);

  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      event: '',
      onset: '',
      duration: '',
      lifeSpace: '',
      characteristics: '',
      cause: '',
      attributes: '',
      interpretation: '',
    };
    setRows([...rows, newRow]);
  };

  const handleInputChange = (id, field, value) => {
    setRows(rows.map(row => (row.id === id ? { ...row, [field]: value } : row)));
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <div className='content'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>SR No</StyledTableCell>
              <StyledTableCell>Event / Key word</StyledTableCell>
              <StyledTableCell align="right">Onset</StyledTableCell>
              <StyledTableCell align="right">Duration</StyledTableCell>
              <StyledTableCell align="right">Life-Space</StyledTableCell>
              <StyledTableCell align="right">Characteristics Expression</StyledTableCell>
              <StyledTableCell align="right">Cause Aggravation Amelioration</StyledTableCell>
              <StyledTableCell align="right">Attributes</StyledTableCell>
              <StyledTableCell align="right">Interpretation</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell>{row.id}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  <TextField
                    value={row.event}
                    onChange={(e) => handleInputChange(row.id, 'event', e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <TextField
                    value={row.onset}
                    onChange={(e) => handleInputChange(row.id, 'onset', e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <TextField
                    value={row.duration}
                    onChange={(e) => handleInputChange(row.id, 'duration', e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <TextField
                    value={row.lifeSpace}
                    onChange={(e) => handleInputChange(row.id, 'lifeSpace', e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <TextField
                    value={row.characteristics}
                    onChange={(e) => handleInputChange(row.id, 'characteristics', e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <TextField
                    value={row.cause}
                    onChange={(e) => handleInputChange(row.id, 'cause', e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <TextField
                    value={row.attributes}
                    onChange={(e) => handleInputChange(row.id, 'attributes', e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <TextField
                    value={row.interpretation}
                    onChange={(e) => handleInputChange(row.id, 'interpretation', e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" onClick={handleAddRow} style={{ marginTop: 16 }}>
        Add Row
      </Button>
    </div>
  );
};

export default LstTable;
