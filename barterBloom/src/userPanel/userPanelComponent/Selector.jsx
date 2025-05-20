// import { useState, useRef } from 'react';
// import { MenuItem, FormControl, Select, Typography } from '@mui/material';

// function Selector({ items = [], shouldBeFullWidth = true, width, value, onChange, placeholder }) {

//     const selectRef = useRef(null);
//     const [menuWidth, setMenuWidth] = useState(null);


//     return (
//         <FormControl size="small" sx={{ width: width }} fullWidth={shouldBeFullWidth}>
//             <Select
//                 ref={selectRef}
//                 size='small'
//                 value={value || ""}
//                 onChange={onChange}
//                 displayEmpty
//                 inputProps={{ 'aria-label': 'Without label' }}
//                 MenuProps={{
//                     transitionDuration: 0,
//                     TransitionProps: {
//                         onEnter: () => {
//                             if (selectRef.current) {
//                                 setMenuWidth(selectRef.current.clientWidth);
//                             }
//                         }
//                     },
//                     PaperProps: {
//                         sx: {
//                             maxHeight: '250px',
//                             minWidth: menuWidth,
//                             maxWidth: menuWidth
//                         }
//                     }
//                 }}
//             >
//                 <MenuItem value="">
//                     <Typography component="em" color='#a1a1a1'>{placeholder ? placeholder : "Select --"}</Typography>
//                 </MenuItem>
//                 {items.map((item, i) => (
//                     <MenuItem
//                         value={item}
//                         key={i}
//                         sx={{
//                             fontSize: "14px",
//                             whiteSpace: 'normal',
//                             '& .MuiTypography-root': {
//                                 wordBreak: 'break-word',
//                             }
//                         }}>{item}</MenuItem>
//                 ))}
//             </Select>
//         </FormControl>
//     );
// }

// export default Selector;










import { MenuItem, Typography, Stack, FormControl, Select } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Selector({
    items = [],
    shouldBeFullWidth = false,
    shouldBeDisabled = false,
    width,
    value,
    onChange,
    selectSx,
    showDefaultOption = true
}) {
    return (
        <FormControl size="small" sx={{ width: width }} fullWidth={shouldBeFullWidth}>
            <Select
                disabled={shouldBeDisabled}
                size="small"
                value={value || ""}
                onChange={onChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                MenuProps={{ transitionDuration: 0 }}
                sx={{ ...selectSx }}
                IconComponent={KeyboardArrowDownIcon}
            >
                {showDefaultOption && (
                    <MenuItem value="">
                        <em>Select --</em>
                    </MenuItem>
                )}
                {items.map((item, i) => (
                    <MenuItem value={item.value || item.name || item} key={i}>
                        <Stack direction="row" alignItems="center" gap={1}>
                            {item.image && (
                                <img src={item.image} alt={item.name} width="24" height="24" />
                            )}
                            {item.icon && (
                                <item.icon />
                            )}
                            <Typography>
                                {item.name || item}
                            </Typography>
                            {item.description && (
                                <Typography variant="body2" color="gray">
                                    {item.description}
                                </Typography>
                            )}
                        </Stack>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default Selector;