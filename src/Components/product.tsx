import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, styled, tableCellClasses } from '@mui/material'
import React, { useRef, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';

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
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(
    Name: string,
    Description: string,
    Price: number,
    CategoryID: number,
    StockQuantity: number,
  ) {
    return { Name, Description, Price, CategoryID, StockQuantity };
  }
  
  const rows = [
    createData('Electronic1','Electronic' , 1500, 1, 10),
    createData('Electronic2','Electronic' , 1500, 1, 10),
    createData('Electronic3','Electronic' , 1500, 1, 10),
    createData('Electronic4','Electronic' , 1500, 1, 10),
  ];

export default function Product() {
    const [open, setOpen] = React.useState(false);
    const AddCategoryForm: any = useRef(null);
    const [AddForm ,setAddForm]=useState({
        Product:'',Description:'',Price:0,StockQuantity:0,CategoryID:''
    })
    const handleClickOpen = () => {
        setOpen(true);
      };
    const handleAddCategory = async(e:React.FormEvent) =>{
        e.preventDefault();
        console.log("categoty",AddForm);
        // AddCategoryForm.reset();
       }
    const handleClose = () => {
        setOpen(false);
      };
      const handleChange = (e: any) => {
        setAddForm({ ...AddForm, [e.target.name]: e.target.value });
    }
  return (
    <div>
    <div style={{ margin: 'auto', border: 'solid black 1px', borderRadius: '10px', borderColor: 'grey' }}>
        <div style={{ padding: '2%',display: 'flex', justifyContent: 'space-between'  }}>
            <Typography className='mt-5 mx-5' variant='h4' component='h3'>
                <b>Manage Product</b>
            </Typography>
            <Button variant='contained' startIcon={<AddIcon />} onClick={handleClickOpen} className='mx-5'>
                 Add Product
            </Button>
        </div>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">StockQuantity</StyledTableCell>
            <StyledTableCell align="right">CategoryID</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Name}>
              <StyledTableCell component="th" scope="row">
                {row.Name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Description}</StyledTableCell>
              <StyledTableCell align="right">{row.Price}</StyledTableCell>
              <StyledTableCell align="right">{row.StockQuantity}</StyledTableCell>
              <StyledTableCell align="right">{row.CategoryID}</StyledTableCell>
              <StyledTableCell align="right">
                <Button variant='contained' style={{padding:'1px',marginRight:'3px'}}>Update</Button>
                <Button variant='contained' style={{padding:'1px'}} color='error'>Delete</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <Dialog open={open} onClose={handleClose}>
        <form ref={AddCategoryForm} id='form' onSubmit={handleAddCategory}>
        <DialogTitle>Add Product</DialogTitle>
        <DialogContent>
          <Box sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}>
            
                <div style={{marginTop:'1px',padding:'1px'}}>
                    <TextField
                    label="Product Name"
                    placeholder='Enter Product Name'
                    name='Product'
                    value={AddForm.Product}
                    onChange={handleChange}
                    />
                    <TextField
                    label="Description"
                    placeholder='Enter Description'
                    defaultValue=""
                    name='Description'
                    value={AddForm.Description}
                    onChange={handleChange}

                    />
                </div>
                <div style={{marginTop:'1px',padding:'5px'}}>
                    <TextField
                    label="Product Price"
                    placeholder='Enter Product Price '
                    name='Price'
                    value={AddForm.Price}
                    onChange={handleChange}
                    />
                    <TextField
                    label="Stock Quantity"
                    placeholder='Enter Stock Quantity'
                    defaultValue=""
                    name='StockQuantity'
                    value={AddForm.StockQuantity}
                    onChange={handleChange}
                    />
                </div>
                <div style={{marginTop:'1px',padding:'5px'}}>
                <TextField
                    label="Product CategoryID"
                    placeholder='Enter Product CategoryID '
                    name='CategoryID'
                    value={AddForm.CategoryID}
                    onChange={handleChange}
                    />
                </div>
                
            
            </Box>
        </DialogContent>
        <DialogActions>
          <Button variant='contained'  color='error' onClick={handleClose}>Cancel</Button>
          <Button variant='contained' type='submit' onClick={handleClose}>Add Product</Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}
