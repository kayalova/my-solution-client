import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';


function createData(numberString, codeString) {
    return { numberString, codeString };
}

const rows = [
    createData('1', 'hello hello yoo'),
    createData('2', 'import React from "react"'),
    createData('3', 'import "bright future"'),
    createData('4', 'import dog from "future"'),
    createData('5', 'import fantasy from "anywhere"'),
    createData('6', ":)"),
    createData('7', ":)"),
    createData('8', ":)"),
    createData('9', ":)"),
    createData('10', ":)"),
];

const useStyles = makeStyles({
    table: {
        backgroundColor: '#fbfbfb',
    },
    row: {
        display: 'flex'
    },
    cols: {
        borderBottom: 0,
        padding: '2px 0',
        color: '#666',
        fontFamily: 'monospace',
        fontSize: 13,
        color: '#43679D'
    },
    th: {
        minWidth: 20,
        paddingRight: 15,
        color: '#1890ff'
    }
});



const SnippetTable = () => {
    const classes = useStyles();

    return (
        <TableContainer >
            <Table className={classes.table} aria-label="customized table">
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.numberString} className={classes.row}>
                            <TableCell component="th" align="right" scope="row" className={[classes.cols, classes.th]}>
                                {row.numberString}
                            </TableCell>
                            <TableCell align="left" className={classes.cols}>{row.codeString}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default SnippetTable