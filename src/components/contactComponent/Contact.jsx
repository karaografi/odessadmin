import React from 'react'

const Contact = ({contact}) => {
    return (
        <>
                <th>

                    <div className="font-bold">
                        {contact.id}
                    </div>
                </th>
                <td>

                    <div className="font-bold">
                    {contact.firstName}
                    </div>
                </td>
                <td>

                    <div className="font-bold">
                    {contact.lastName}
                    </div>
                </td>
                <td>
                    <div className="font-bold">
                    {contact.eMail}
                    </div>
                </td>
                <td>

                    <div className="font-bold">
                    {contact.phone}
                    </div>
                </td>
                <td>

                    <div className="font-bold">
                    {contact.topic}
                    </div>
                </td>

                </>


    )
}

export default Contact