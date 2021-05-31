import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function GroupedSelect() {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
          <optgroup label="Profile">
            <option value={1}>washing machine repaire</option>
            <option value={2}>software engineer</option>
            <option value={3}>laptop repairer</option>
            <option value={4}>Ac repairing</option>
            <option value={5}>sales of kirana items</option>
            <option value={6}>Books</option>
            <option value={7}>laundry work</option>
            <option value={7}>Home cleaning</option>

            <TextField
            autoFocus
            margin="dense"
            id="specify"
            label="bataiye agar is list mein name na ho to"
            type="specify"
            fullWidth
          />


            




          </optgroup>
         
           
        </Select>
      </FormControl>
      {/* <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
        <Select defaultValue="" id="grouped-select">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Category 1</ListSubheader>
          <MenuItem value={1}>plumber</MenuItem>
          <MenuItem value={2}>washing machine repair</MenuItem>
          
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
        </Select>
      </FormControl> */}
    </div>
  );
}
