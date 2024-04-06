import { Pagination } from "@mui/material";
import Stack from "@mui/material/Stack";

type Props = {
  page: number;
  count: number;
  onChange:
    | ((event: React.ChangeEvent<unknown>, page: number) => void)
    | undefined;
};

export default function BasicPagination({ page, onChange, count }: Props) {
  return (
    <Stack spacing={2}>
      <Pagination size="small" count={count} page={page} onChange={onChange} />
    </Stack>
  );
}
