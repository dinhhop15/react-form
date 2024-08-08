import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
  InputBase,
  Paper,
  IconButton,
  Badge,
} from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { cartCount } = useCart();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#6AD4DD" }}>
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            sx={{ marginRight: 4 }}
          >
            KIA
          </Typography>
          <Box>
            <Button
              color="inherit"
              component={Link}
              to="/products"
              sx={{ mr: 2 }}
            >
              Products
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/categories"
              sx={{ mr: 2 }}
            >
              Categories
            </Button>
            <Button color="inherit" component={Link} to="/news" sx={{ mr: 2 }}>
              News
            </Button>
          </Box>
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              width: 300,
              backgroundColor: "#fff",
              marginLeft: 20,
              borderRadius: 1,
              boxShadow: "none",
              padding: "0 10px",
            }}
          >
            <InputBase
              placeholder="Search Products"
              sx={{ ml: 1, flex: 1 }}
              inputProps={{ "aria-label": "search products" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <Box sx={{ marginLeft: 45 }}>
            <IconButton component={Link} to="/cart" color="inherit">
              <Badge badgeContent={cartCount} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            {isLoggedIn ? (
              <>
                <IconButton>
                  <Avatar
                    alt="User Avatar"
                    src="/path/to/avatar.jpg"
                    sx={{ mr: 2 }}
                  />
                </IconButton>
              </>
            ) : (
              <>
                <Button
                  color="inherit"
                  component={Link}
                  to="/login"
                  sx={{ mr: 2 }}
                  onClick={handleLogin}
                >
                  Login
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/register"
                  sx={{ mr: 2 }}
                >
                  Register
                </Button>
                <Button onClick={handleLogout} color="inherit" fullWidth>
                  Logout
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

function useCart() {
  return {
    cartCount: 0,
  };
}

export default Header;
