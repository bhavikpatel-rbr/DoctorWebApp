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
import { Box } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '16px', // Increased padding for better spacing
    borderBottom: `2px solid ${theme.palette.divider}`, // Added bottom border
    fontSize: '16px', // Increased font size for header
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderRight: `1px solid ${theme.palette.divider}`,
    '&:last-child': {
      borderRight: 'none',
    },
    minHeight: '60px',
    backgroundColor: '#ffffff',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:hover': {
    backgroundColor: theme.palette.action.selected,
    transition: 'background-color 0.3s ease',
  },
  backgroundColor: '#ffffff',
}));

const CommentBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  borderRadius: '4px',
  padding: '8px',
  marginBottom: '8px',
  fontStyle: 'italic',
  color: '#555',
  width: '100%',
}));

const CommentInput = styled(TextField)({
  width: '100%',
  marginBottom: '8px',
});

const LstTable = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      event: 'Frozen yoghurt',
      eventComments: [],
      onset: 'Immediate',
      onsetComments: [],
      duration: 'Short',
      durationComments: [],
      lifeSpace: 'Home',
      lifeSpaceComments: [],
      characteristics: 'Sweet',
      characteristicsComments: [],
      cause: 'Unknown',
      causeComments: [],
      attributes: 'None',
      attributesComments: [],
      interpretation: 'Delicious',
      interpretationComments: [],
    },
  ]);

  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      event: '',
      eventComments: [],
      onset: '',
      onsetComments: [],
      duration: '',
      durationComments: [],
      lifeSpace: '',
      lifeSpaceComments: [],
      characteristics: '',
      characteristicsComments: [],
      cause: '',
      causeComments: [],
      attributes: '',
      attributesComments: [],
      interpretation: '',
      interpretationComments: [],
    };
    setRows([...rows, newRow]);
  };

  const handleInputChange = (id, field, value) => {
    setRows(rows.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
  };

  const handleAddComment = (id, field) => {
    const commentField = `${field}Comments`;
    const newComment = rows.find((row) => row.id === id)[field];
    if (newComment) {
      setRows(
        rows.map((row) => {
          if (row.id === id) {
            return {
              ...row,
              [commentField]: [...row[commentField], newComment],
              [field]: '',
            };
          }
          return row;
        })
      );
    }
  };

  const handleEditComment = (id, field, index, value) => {
    const commentField = `${field}Comments`;
    setRows(
      rows.map((row) => {
        if (row.id === id) {
          const updatedComments = [...row[commentField]];
          updatedComments[index] = value;
          return {
            ...row,
            [commentField]: updatedComments,
          };
        }
        return row;
      })
    );
  };

  return (
    <div className='content'>
      <TableContainer component={Paper} style={{ overflowX: 'auto', marginTop: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              {['SR No', 'Event / Key word', 'Onset', 'Duration', 'Life-Space', 'Characteristics Expression', 'Cause Aggravation Amelioration', 'Attributes', 'Interpretation'].map((header) => (
                <StyledTableCell align='center' key={header}>{header}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell>{row.id}</StyledTableCell>
                {['event', 'onset', 'duration', 'lifeSpace', 'characteristics', 'cause', 'attributes', 'interpretation'].map((field) => (
                  <StyledTableCell key={field} align='center' style={{ padding: '12px' }}>
                    <div style={{ display: 'flex', width: '200px', flexDirection: 'column', alignItems: 'flex-end' }}>
                      {row[`${field}Comments`].map((comment, index) => (
                        <CommentBox key={index}>
                          <textarea
                            value={comment}
                            rows="4"
                            onChange={(e) => handleEditComment(row.id, field, index, e.target.value)}
                            placeholder='Edit comment'
                            style={{ width: '100%', border: 'none', borderRadius: '4px', padding: '4px' }}
                          />
                        </CommentBox>
                      ))}
                      {row[`${field}Comments`].length === 0 && (
                        <>
                          <TextField
                            value={row[field]}
                            onChange={(e) => handleInputChange(row.id, field, e.target.value)}
                            variant='outlined'
                            size='small'
                            placeholder={`Add a ${field}`}
                            style={{ marginBottom: '8px', width: '200px' }}
                          />
                          <Button variant='outlined' color='primary' onClick={() => handleAddComment(row.id, field)}>
                            Add Comment
                          </Button>
                        </>
                      )}
                    </div>
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant='contained' color='primary' onClick={handleAddRow} style={{ marginTop: '16px' }}>
        Add Row
      </Button>
    </div>
  );
};

export default LstTable;
