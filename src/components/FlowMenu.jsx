import React from 'react';
import { Collapse, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const FlowMenu = ({ estimateDates, onEstimateClick }) => {
    const [opened, setOpened] = React.useState(false);
    const handleClick = () => setOpened(!opened);

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={`Previous estimates (${estimateDates.length})`} />
                {opened ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={opened} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {estimateDates.map((date) => <ListItem button onClick={() => onEstimateClick(date)}>
                        <ListItemText primary={`Estimate${date}`} />
                    </ListItem>)}
                </List>
            </Collapse>
        </List>
    );
};

export default FlowMenu;