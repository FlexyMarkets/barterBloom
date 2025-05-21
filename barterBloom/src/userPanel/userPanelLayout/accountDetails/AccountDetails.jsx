import { Stack, Avatar, Typography, Tooltip, IconButton, Box, Popper } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../globalState/auth/authSlice";
import { useNavigate } from "react-router-dom";


function AccountDetails({ sidebarOpen }) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = useState(null);
    const popperRef = useRef(null);
    const avatarRef = useRef(null);

    const { userData } = useSelector(state => state.auth)

    const accountDetailsData = {
        avatar: "/avatar.png",
        name: userData?.name,
        rank: `Rank - ${userData?.rank}`
    }

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleClickOutside = (event) => {
        if (
            popperRef.current &&
            !popperRef.current.contains(event.target) &&
            avatarRef.current &&
            !avatarRef.current.contains(event.target)
        ) {
            setAnchorEl(null);
        }
    };

    useEffect(() => {
        if (anchorEl) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [anchorEl]);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    function handleLogOut() {
        console.log("working")
        dispatch(logout());
        navigate("/");
    }

    return (
        <Stack
            direction="column"
            borderTop={"1px solid primary.main"}
            sx={{
                flexDirection: "row",
                justifyContent: sidebarOpen ? "space-between" : "center",
                alignItems: "center",
                py: ".5rem",
                px: sidebarOpen && ".5rem",
                whiteSpace: "nowrap"
            }}
        >
            <Avatar
                ref={avatarRef}
                alt="Aditya"
                src={accountDetailsData.avatar}
                sx={{ border: "1px solid black", width: 36, height: 36, cursor: !sidebarOpen && "pointer" }}
                onClick={sidebarOpen ? undefined : handleClick}
            />
            {sidebarOpen &&
                <>
                    <Stack>
                        <Typography>{accountDetailsData.name}</Typography>
                        <Typography variant="body2" color="textSecondary">{accountDetailsData.rank}</Typography>
                    </Stack>
                    <Tooltip title="Logout" placement="right">
                        <IconButton>
                            <LogoutIcon />
                        </IconButton>
                    </Tooltip>
                </>
            }
            <Popper
                id={id}
                open={open}
                anchorEl={anchorEl}
                placement="right-start"
                sx={{ zIndex: (theme) => theme.zIndex.tooltip }}
            >
                <Box ref={popperRef} sx={{ border: 1, p: 1, bgcolor: 'background.paper', display: "flex", flexDirection: "row", gap: "10px" }}>
                    <Stack>
                        <Typography>{accountDetailsData.name}</Typography>
                        <Typography variant="body2" color="textSecondary">{accountDetailsData.rank}</Typography>
                    </Stack>
                    <Tooltip title="Logout" placement="right">
                        <IconButton onClick={() => handleLogOut()}>
                            <LogoutIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Popper>
        </Stack>
    );
}

export default AccountDetails;