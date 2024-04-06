import { Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Post } from "../../services/PostsService";

export default function PostComponent({
  id,
  title,
  content,
  onDelete,
}: Post & { onDelete: (id?: number) => void }) {
  return (
    <Box m={2}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2">{content}</Typography>
          <Button onClick={() => onDelete(id)} variant="contained">
            Delete
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
