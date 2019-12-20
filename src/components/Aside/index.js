import React from 'react'
import './Aside.sass'

const Aside = () => (
    <aside className="aside">
        <h3 className="aside__header">Filter by</h3>
        <form action="" className="form">
            <input type="text" className="form__field" placeholder="[filename].[ext]" />
            <textarea
                className="form__field textarea"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Description..."
            />

        </form>
    </aside>
)

export default Aside