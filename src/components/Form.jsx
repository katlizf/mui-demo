import React, {useState} from 'react'
import {Button, Box, FormControl, InputLabel, MenuItem, Select, Typography, TextField} from '@mui/material'

const Form = () => {
    const [name, setName] = useState("")
    const [status, setStatus] = useState("")

    const handleName = (e) => setName(e.target.value)
    const handleStatus = (e) => setStatus(e.target.value)

    const handleClick = () => {
        console.log("name:", name)
        console.log("status:", status)
    }

    return (
        <Box sx={{display: "flex", flexDirection: "column", gap: 2}}>
            <Typography variant="h3">My simple form</Typography>
            <TextField variant="filled" placeholder="What's your name?" onChange={handleName}/>
            <FormControl>
                <InputLabel id="statusLabel">Select a status</InputLabel>
                <Select
                    labelID="statusLabel"
                    id="status"
                    value={status}
                    onChange={handleStatus}
                    variant="filled"
                    >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value="cool">Cool</MenuItem>
                    </Select>
            </FormControl>
            <Button variant='contained' onClick={handleClick}>Submit</Button>
        </Box>
    )
}

export default Form

// variant on TextField setting how it will look rather than how it performs
// sx for inline styling