import { Box, CardActions, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { Comment } from "../../services/CommentsService";

export default function CommentComponent({
  postId,
  content,
  onDelete,
}: Comment & { onDelete: (id: number) => void }) {
  return (
    <Box m={2}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="body2">{content}</Typography>
        </CardContent>
        <CardActions sx={{ float: "right" }}>
          <IconButton
            onClick={() => postId && onDelete(postId)}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}
