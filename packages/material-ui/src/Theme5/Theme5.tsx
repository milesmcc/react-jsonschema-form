import React, { PropsWithChildren, Ref } from 'react';

import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormGroup,
  FormLabel,
  Grid,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material'
import {
  Add as AddIcon,
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
  Error as ErrorIcon,
  Remove as RemoveIcon,
} from '@mui/icons-material';

import ArrayFieldTemplate from '../ArrayFieldTemplate';
import ErrorList from '../ErrorList';
import Fields from '../Fields';
import FieldTemplate from '../FieldTemplate';
import ObjectFieldTemplate from '../ObjectFieldTemplate';
import Widgets from '../Widgets';
import MuiComponentContext from '../MuiComponentContext/MuiComponentContext';

import { ThemeProps, utils } from '@rjsf/core';

const { getDefaultRegistry } = utils;

const { fields, widgets } = getDefaultRegistry();

const DefaultChildren = () => (
  <Box marginTop={3}>
    <Button type="submit" variant="contained" color="primary">
      Submit
    </Button>
  </Box>
);

export const Mui5Context = {
  Button,
  Box,
  Checkbox,
  Divider,
  Grid,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  IconButton,
  Input: OutlinedInput,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  AddIcon,
  ArrowDownwardIcon,
  ArrowUpwardIcon,
  ErrorIcon,
  RemoveIcon,
};

const Mui5TagName = React.forwardRef(
  function Mui5TagName(props: Omit<PropsWithChildren<HTMLFormElement>, 'contentEditable'>,
                       ref: Ref<HTMLFormElement>) {
    const { children, ...rest } = props;
    return (
      <MuiComponentContext.Provider value={Mui5Context}>
        <form ref={ref} {...rest}>
          {children}
        </form>
      </MuiComponentContext.Provider>
    );
  }
);

const Theme: ThemeProps = {
  tagName: Mui5TagName,
  children: <DefaultChildren />,
  ArrayFieldTemplate,
  fields: { ...fields, ...Fields },
  FieldTemplate,
  ObjectFieldTemplate,
  widgets: { ...widgets, ...Widgets },
  ErrorList,
};

export default Theme;
