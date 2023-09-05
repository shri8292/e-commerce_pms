import React from 'react'
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Product from './product';
import Catogery from './Catogery';

export default function Header() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <>
            <Typography variant='h3' style={{textAlign:'center', padding:'5px' ,backgroundColor:'#949291'}}>
                Product Management System
            </Typography>
            <Box sx={{ width: '100%', typography: 'body1', backgroundColor: '#ede9e8', height:'100%' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: '#d6d6d6' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" >
                            <Tab label="Category" value="1" />
                            <Tab label="Product" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1"><Catogery/> </TabPanel>
                    <TabPanel value="2"><Product /></TabPanel>
                </TabContext>
            </Box>
        </>

        // <Box sx={{ width: '100%',backgroundColor: '#d6d6d6' }}>
        //   <Tabs
        //     value={value}
        //     onChange={handleChange}
        //     textColor="secondary"
        //     indicatorColor="secondary"
        //     aria-label="secondary tabs example"
        //   >
        //     <Tab value="Home" label="Home" />
        //     <Tab value="Product" label="Product" />
        //     <Tab value="Category" label="Category" />
        //   </Tabs>
        // </Box>
    )
}
