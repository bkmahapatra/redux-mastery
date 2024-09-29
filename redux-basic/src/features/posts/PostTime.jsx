import { formatDistanceToNow, parseISO } from "date-fns";

const PostTime = ({ timestamp }) => {
    let time = "";

    if (timestamp) {
        const date = parseISO(timestamp);
        const timeAgo = formatDistanceToNow(date);
        time = `${timeAgo} ago`;
    }

    return (
        <span title={timestamp}>
            <i>{time}</i>
        </span>
    );
};


export default PostTime;
