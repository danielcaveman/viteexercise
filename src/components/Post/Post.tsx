import { Box, Button, CardActions, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { Post } from "../../services/PostsService";
import { useNavigate } from "react-router-dom";

export default function PostComponent({
  id,
  title,
  content,
  onDelete,
}: Post & { onDelete: (id: number) => void }) {
  const navigate = useNavigate();

  return (
    <Box m={2}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2">{content}</Typography>
        </CardContent>
        <CardActions sx={{ float: "right" }}>
          <Button onClick={() => navigate("comments/" + id)}>Comments</Button>
          <IconButton onClick={() => id && onDelete(id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}
