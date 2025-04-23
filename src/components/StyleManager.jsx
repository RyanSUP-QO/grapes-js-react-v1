import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  TextField,
  Box,
  Slider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";

export default function StyleManager({ sectors }) {
  const handlePropertyChange = (property, value) => {
    property.upValue(value);
  };

  const renderPropertyControl = (property) => {
    const type = property.getType();
    const defValue = property.getDefaultValue();
    const hasValue = property.hasValue();
    const value = property.getValue();
    const valueString = hasValue ? value : "";
    const canClear = property.canClear();

    const onChange = (ev) => {
      handlePropertyChange(property, ev.target.value);
    };

    let inputToRender = (
      <TextField
        placeholder={defValue}
        value={valueString}
        onChange={onChange}
        fullWidth
      />
    );

    switch (type) {
      case "radio":
        inputToRender = (
          <RadioGroup value={value} onChange={onChange} row>
            {property.getOptions().map((option) => (
              <FormControlLabel
                key={property.getOptionId(option)}
                value={property.getOptionId(option)}
                label={property.getOptionLabel(option)}
                control={<Radio size="small" />}
              />
            ))}
          </RadioGroup>
        );
        break;
      case "select":
        inputToRender = (
          <FormControl fullWidth size="small">
            <Select value={value} onChange={onChange}>
              {property.getOptions().map((option) => (
                <MenuItem
                  key={property.getOptionId(option)}
                  value={property.getOptionId(option)}
                >
                  {property.getOptionLabel(option)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
        break;
      case "color":
        inputToRender = (
          <TextField
            fullWidth
            placeholder={defValue}
            value={valueString}
            onChange={onChange}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <div
                    style={{
                      width: "15px",
                      height: "15px",
                      borderRadius: "3px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      backgroundColor: value || defValue,
                    }}
                  >
                    <input
                      type="color"
                      style={{
                        width: "15px",
                        height: "15px",
                        cursor: "pointer",
                        opacity: 0,
                      }}
                      value={value || defValue}
                      onChange={(ev) =>
                        handlePropertyChange(property, ev.target.value)
                      }
                    />
                  </div>
                </InputAdornment>
              ),
            }}
          />
        );
        break;
      case "slider":
        inputToRender = (
          <Slider
            size="small"
            value={parseFloat(value)}
            min={property.getMin()}
            max={property.getMax()}
            step={property.getStep()}
            onChange={onChange}
            valueLabelDisplay="auto"
          />
        );
        break;
      case "composite":
        inputToRender = (
          <Box sx={{ p: 2, bgcolor: "rgba(0,0,0,0.2)", borderRadius: 1 }}>
            {property.getProperties().map((prop) => (
              <Box key={prop.getId()} sx={{ mb: 2 }}>
                {renderPropertyControl(prop)}
              </Box>
            ))}
          </Box>
        );
        break;
    }

    return (
      <Box sx={{ mb: 3, px: 1, width: property.isFull() ? "100%" : "50%" }}>
        <Box
          sx={{
            display: "flex",
            mb: 2,
            alignItems: "center",
            color: canClear ? "primary.main" : "inherit",
          }}
        >
          <Typography sx={{ flexGrow: 1, textTransform: "capitalize" }}>
            {property.getLabel()}
          </Typography>
          {canClear && (
            <IconButton size="small" onClick={() => property.clear()}>
              <ExpandMore sx={{ transform: "rotate(45deg)" }} />
            </IconButton>
          )}
        </Box>
        {inputToRender}
      </Box>
    );
  };

  return (
    <Box 
      className="gjs-qo-style-manager"
      sx={{
        height: 'calc(100vh - 48px)',
        overflowY: 'auto',
        scrollbarWidth: 'thin',
        scrollbarColor: '#888 #f1f1f1',
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-track': {
          background: '#f1f1f1',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#888',
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: '#555',
        }
      }}
    >
      {sectors.map((s) => (
        <Accordion key={s.getId()} disableGutters>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>{s.getName()}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {s.getProperties().map((p) => renderPropertyControl(p))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
