import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';


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



const SnippetTable = ({ description }) => {
    const classes = useStyles();

    const rows = description.split('\n')

    return (
        <TableContainer >
            <Table className={classes.table} aria-label="customized table">
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index} className={classes.row}>
                            <TableCell align="right" className={`${classes.cols} ${classes.th}`}>
                                {index + 1}
                            </TableCell>
                            <TableCell align="left" className={classes.cols}>{row}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    )
}

export default SnippetTable