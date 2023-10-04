import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>
    //             With JSX compiled HTML
    //         </h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id:'Hello',className:'dummyClass'},
        React.createElement('h1',
                            {id:'aaa'},
                            'With JSX compiled HTML'
                            )
    )
}

export default Hello