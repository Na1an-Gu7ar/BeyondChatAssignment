import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  Tabs,
  Tab,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LeftSidebar from '../components/LeftSidebar';
import ChatPanel from '../components/ChatPanel';
import CopilotPanel from '../components/CopilotPanel';
import { useTheme } from '@mui/material/styles';

const Conversations = () => {
  const [selectedId, setSelectedId] = useState(1);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ height: '95vh', width: '95vw', display: 'flex', flexDirection: 'column' }}>
      {isMobile && (
        <AppBar position="static" color="default" elevation={1}>
          <Toolbar>
            <IconButton edge="start" onClick={() => setMobileSidebarOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Conversations
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        {isMobile ? (
          <Drawer
            anchor="left"
            open={mobileSidebarOpen}
            onClose={() => setMobileSidebarOpen(false)}
          >
            <Box sx={{ width: 280 }}>
              <LeftSidebar selectedId={selectedId} setSelectedId={setSelectedId} />
            </Box>
          </Drawer>
        ) : (
          <Box sx={{ width: 280, borderRight: '1px solid #eee' }}>
            <LeftSidebar selectedId={selectedId} setSelectedId={setSelectedId} />
          </Box>
        )}

        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {isMobile && (
            <Tabs
              value={tabIndex}
              onChange={(e, val) => setTabIndex(val)}
              variant="fullWidth"
              sx={{ borderBottom: '1px solid #eee' }}
            >
              <Tab label="Chat" />
              <Tab label="Copilot" />
            </Tabs>
          )}

          <Box sx={{ flexGrow: 1, display: 'flex', overflow: 'hidden' }}>
            {(!isMobile || tabIndex === 0) && (
              <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                <ChatPanel />
              </Box>
            )}

            {!isMobile ? (
              <Box sx={{ width: 320 }}>
                <CopilotPanel />
              </Box>
            ) : tabIndex === 1 ? (
              <Box sx={{ flexGrow: 1, overflowY: 'auto', display: 'flex', justifyContent: 'center' }}>
                <CopilotPanel />
              </Box>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Conversations;
