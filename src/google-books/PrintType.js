import React from 'react';

export default function PrintType(props) {


    function changeSelection(value) {
        if (value === "None") {
            props.printTypeHandler(null);
        } else {
            const printType = props.printType.find(printType => printType === value);
            props.printTypeHandler(printType);
            console.log('printType',printType)

        }
    }

    const options = props.printType.map((printType, index) =>
        <option value={printType} key={index}>{printType}</option>
    )
    return (
        <div className="print-type-selector">
            <form>
                <label htmlFor="print-type">Print Type: </label>
                <select
                    id="print-type"
                    name="print-type"
                    onChange={e => changeSelection(e.target.value)}>
                    <option value="None">Select one...</option>
                    {options}
                </select>
            </form>
        </div>
    )
}