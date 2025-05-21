import {
    Box,
    Typography,
    Paper,
    Button,
    TextField,
    InputAdornment,
    IconButton,
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const CopilotPanel = () => {
    return (
        <Paper
            elevation={0}
            sx={{
                width: 288, 
                height: '95%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#f9fafb', 
                borderLeft: '1px solid #e5e7eb', 
                padding: 3,
            }}
        >
            <Box
                flex={1}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                gap={1}
            >
                <Box
                    component="img"
                    src="https://storage.googleapis.com/a1aa/image/a292ca2c-3ac0-4604-9e56-8a4bfd6d4cd7.jpg"
                    alt="AI Copilot icon, black square with white smiling face"
                    height={32}
                    width={32}
                    sx={{ mx: 'auto' }}
                />
                <Typography variant="subtitle2" fontWeight="600" color="text.primary">
                    Hi, I'm Fin AI Copilot
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    Ask me anything about this conversation.
                </Typography>
            </Box>

            <Box component="form" mt={2}>
                <Button
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={{
                        textTransform: 'none',
                        fontSize: '0.75rem',
                        color: '#374151', 
                        mb: 2,
                        borderColor: '#d1d5db', 
                    }}
                >
                    Suggested 🌟 How do I get a refund?
                </Button>

                <TextField
                    fullWidth
                    placeholder="Ask a question..."
                    size="small"
                    variant="outlined"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    edge="end"
                                    size="small"
                                    sx={{ color: '#9ca3af' }} 
                                    aria-label="Submit question"
                                >
                                    <ArrowUpwardIcon fontSize="small" />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                        },
                        '& .MuiOutlinedInput-input': {
                            paddingY: '8px',
                            paddingX: '12px',
                        },
                    }}
                />
            </Box>
        </Paper>
    );
};

export default CopilotPanel;
