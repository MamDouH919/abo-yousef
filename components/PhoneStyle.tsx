"use client"
import React from 'react'
import { styled } from "@mui/material/styles";
import { Fab, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { Phone } from 'lucide-react';


const PREFIX = "PhoneStyle";
const classes = {
    messengerIcon: `${PREFIX}-messengerIcon`
};

const Root = styled(Stack)(() => ({
    [`& .${classes.messengerIcon}`]: {
        backgroundColor: "#2196f3",
        color: "#FFF",
        fontSize: "25px",
        cursor: "pointer",
        [`&:hover`]: {
            backgroundColor: "#0b7acc",
        },
    },
}));

const PhoneStyle = () => {
    return (
        <Root mt={3} alignItems={"center"} spacing={2}>
            <Typography fontSize={35} color={"primary.main"}>أبو يوسف للصباغة</Typography>
            <Stack
                alignItems={"center"}
                width="fit-content"
                border={1}
                borderColor={"primary.main"}
                borderRadius={10}
                p={1}

                direction={"row-reverse"}
                spacing={2}
            >
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    title="mobile"
                    href={`tel:+96550713199`}
                >
                    <Fab size='medium' className={classes.messengerIcon} aria-label="messenger">
                        <Phone />
                    </Fab>
                </Link>
                <Typography fontSize={25} color={"primary.main"}>50713199</Typography>
            </Stack>
        </Root>
    )
}

export default PhoneStyle