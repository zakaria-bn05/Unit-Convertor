import rulerIcon from "./assets/ruler.png"

import React, { useState, useEffect } from "react";

function Converter() {

    const [value1, setValue1] = useState(parseFloat());
    const [value2, setValue2] = useState(0);
    const [unit1, setUnit1] = useState('');
    const [unit2, setUnit2] = useState();
    const [space, setSpace] = useState();
    const [selectedUnit, setSelectedUnit] = useState("Length");
    const LengthUnit = {
        Mm: 0.001,
        Cm: 0.01,
        Dm: 0.1,
        M: 1,
        Dam: 10,
        Hm: 100,
        Km: 1000
    };

    const AreaUnit = {
        Mm2: 0.000001,
        Cm2: 0.0001,
        Dm2: 0.01,
        M2: 1,
        Dam2: 100,
        Hm2: 10000,
        Km2: 1_000_000
    };

    const VolumeUnit = {
        Mm3: 1e-9,
        Cm3: 1e-6,
        Dm3: 0.001,
        M3: 1,
        Dam3: 1000,
        Hm3: 1_000_000,
        Km3: 1_000_000_000
    };

    const MassUnit = {
        Mg: 0.001,
        Cg: 0.01,
        Dg: 0.1,
        G: 1,
        Dag: 10,
        Hg: 100,
        Kg: 1000,
        Ton: 1_000_000
    };

    const TimeUnit = {
        Ms: 0.001,
        S: 1,
        Min: 60,
        Hr: 3600,
        Day: 86400,
        Year: 31536000
    };

    function handleUnit1Change(e) {
        setUnit1(e.target.value);
    }

    function handleUnit2Change(e) {
        setUnit2(e.target.value);
    }

    function handleValue1Change(e) {
        setValue1(e.target.value);
    }

    function handleValue2Change(e) {
        setValue2(e.target.value);
    }
    function handleUnitSelected(e) {
        setSelectedUnit(e.target.value);
    }

    useEffect(() => {
        if (!unit1 || !unit2) return;

        if (selectedUnit === "Length") {
            setValue2((value1 * LengthUnit[unit1]) / LengthUnit[unit2]);
        } else if (selectedUnit === "Area") {
            setValue2((value1 * AreaUnit[unit1]) / AreaUnit[unit2]);
        } else if (selectedUnit === "Volume") {
            setValue2((value1 * VolumeUnit[unit1]) / VolumeUnit[unit2]);
        } else if (selectedUnit === "Mass") {
            setValue2((value1 * MassUnit[unit1]) / MassUnit[unit2]);
        } else if (selectedUnit === "Time") {
            setValue2((value1 * TimeUnit[unit1]) / TimeUnit[unit2]);
        }
    }, [value1, unit1, unit2, selectedUnit]);

    function handleSpace() {
        if (selectedUnit === "Length") {
            return (
                <>
                    <h2 className="unit-title">Convert Length</h2>
                    <div className="operation-space">
                        <div className="from-to-container" >
                            <div className="title-container">
                                <h3>Enter Value</h3>
                                <img src="src\assets\ruler.png" />
                            </div>

                            <div className="from-input-container">
                                <input type="number" onChange={handleValue1Change} className="units-input" value={value1} placeholder="0" />
                                <span className="ruler-container"> <img src={rulerIcon} />  </span>
                            </div>

                            <div className="list-units-container">
                                <span>
                                    <input type="radio" className="radio-input" value="Mm" onChange={handleUnit1Change} name="length-from" id="length-from1" />
                                    <label htmlFor="length-from1">mm</label>
                                </span>
                                <span>
                                    <input type="radio" className="radio-input" value="Cm" onChange={handleUnit1Change} name="length-from" id="length-from2" />
                                    <label htmlFor="length-from2">cm</label>
                                </span>
                                <span>
                                    <input type="radio" className="radio-input" value="Dm" onChange={handleUnit1Change} name="length-from" id="length-from3" />
                                    <label htmlFor="length-from3">dm</label>
                                </span>
                                <span>
                                    <input type="radio" className="radio-input" value="M" onChange={handleUnit1Change} name="length-from" id="length-from4" />
                                    <label htmlFor="length-from4">m</label>
                                </span>
                                <span>
                                    <input type="radio" className="radio-input" value="Dam" onChange={handleUnit1Change} name="length-from" id="length-from5" />
                                    <label htmlFor="length-from5">dam</label>
                                </span>
                                <span>
                                    <input type="radio" className="radio-input" value="Hm" onChange={handleUnit1Change} name="length-from" id="length-from6" />
                                    <label htmlFor="length-from6">hm</label>
                                </span>
                                <span>
                                    <input type="radio" className="radio-input" value="Km" onChange={handleUnit1Change} name="length-from" id="length-from7" />
                                    <label htmlFor="length-from7">km</label>
                                </span>
                            </div>
                        </div>

                        <div className="from-to-container">
                            <h3>Convert Value</h3>
                            <div>
                                <input type="number" className="units-input" onChange={handleValue1Change} value={value2} readOnly />
                            </div>
                            <div>
                                <div className="list-units-container">
                                    <span>
                                        <input type="radio" className="radio-input" value="Mm" onChange={handleUnit2Change} name="length-to" id="length-to1" />
                                        <label htmlFor="length-to1">mm</label>
                                    </span>
                                    <span>
                                        <input type="radio" className="radio-input" value="Cm" onChange={handleUnit2Change} name="length-to" id="length-to2" />
                                        <label htmlFor="length-to2">cm</label>
                                    </span>
                                    <span>
                                        <input type="radio" className="radio-input" value="Dm" onChange={handleUnit2Change} name="length-to" id="length-to3" />
                                        <label htmlFor="length-to3">dm</label>
                                    </span>
                                    <span>
                                        <input type="radio" className="radio-input" value="M" onChange={handleUnit2Change} name="length-to" id="length-to4" />
                                        <label htmlFor="length-to4">m</label>
                                    </span>
                                    <span>
                                        <input type="radio" className="radio-input" value="Dam" onChange={handleUnit2Change} name="length-to" id="length-to5" />
                                        <label htmlFor="length-to5">dam</label>
                                    </span>
                                    <span>
                                        <input type="radio" className="radio-input" value="Hm" onChange={handleUnit2Change} name="length-to" id="length-to6" />
                                        <label htmlFor="length-to6">hm</label>
                                    </span>
                                    <span>
                                        <input type="radio" className="radio-input" value="Km" onChange={handleUnit2Change} name="length-to" id="length-to7" />
                                        <label htmlFor="length-to7">km</label>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        } else if (selectedUnit === "Area") {
            return (
                <>
                    <h2 className="unit-title"> Convert Area</h2>
                    <div className="operation-space">
                        <div className="from-to-container">
                            <div className="title-container">
                                <h3>Enter Value</h3>
                                <img src="src\assets\ruler.png" />
                            </div>

                            <div className="from-input-container">
                                <input type="number" onChange={handleValue1Change} className="units-input" value={value1} placeholder="0" />
                                <span className="ruler-container"> <img src="src\assets\ruler.png" />  </span>
                            </div>

                            <div className="list-units-container">
                                <span>
                                    <input type="radio" value="Mm2" className="radio-input" onChange={handleUnit1Change} name="area-from" id="area-from1" />
                                    <label htmlFor="area-from1">mm<sup>2</sup></label>
                                </span>
                                <span>
                                    <input type="radio" value="Cm2" className="radio-input" onChange={handleUnit1Change} name="area-from" id="area-from2" />
                                    <label htmlFor="area-from2">cm<sup>2</sup></label>
                                </span>
                                <span>
                                    <input type="radio" value="Dm2" className="radio-input" onChange={handleUnit1Change} name="area-from" id="area-from3" />
                                    <label htmlFor="area-from3">dm<sup>2</sup></label>
                                </span>
                                <span>
                                    <input type="radio" value="M2" className="radio-input" onChange={handleUnit1Change} name="area-from" id="area-from4" />
                                    <label htmlFor="area-from4">m<sup>2</sup></label>
                                </span>
                                <span>
                                    <input type="radio" value="Dam2" className="radio-input" onChange={handleUnit1Change} name="area-from" id="area-from5" />
                                    <label htmlFor="area-from5">dam<sup>2</sup></label>
                                </span>
                                <span>
                                    <input type="radio" value="Hm2" className="radio-input" onChange={handleUnit1Change} name="area-from" id="area-from6" />
                                    <label htmlFor="area-from6">hm<sup>2</sup></label>
                                </span>
                                <span>
                                    <input type="radio" value="Km2" className="radio-input" onChange={handleUnit1Change} name="area-from" id="area-from7" />
                                    <label htmlFor="area-from7">km<sup>2</sup></label>
                                </span>
                            </div>
                        </div>

                        <div className="from-to-container">
                            <h3>Convert Value</h3>
                            <div>
                                <input type="number" className="units-input" onChange={handleValue1Change} value={value2} readOnly />
                            </div>
                            <div>
                                <div className="list-units-container">
                                    <span>
                                        <input type="radio" value="Mm2" className="radio-input" onChange={handleUnit2Change} name="area-to" id="area-to1" />
                                        <label htmlFor="area-to1">mm<sup>2</sup></label>
                                    </span>
                                    <span>
                                        <input type="radio" value="Cm2" className="radio-input" onChange={handleUnit2Change} name="area-to" id="area-to2" />
                                        <label htmlFor="area-to2">cm<sup>2</sup></label>
                                    </span>
                                    <span>
                                        <input type="radio" value="Dm2" className="radio-input" onChange={handleUnit2Change} name="area-to" id="area-to3" />
                                        <label htmlFor="area-to3">dm<sup>2</sup></label>
                                    </span>
                                    <span>
                                        <input type="radio" value="M2" className="radio-input" onChange={handleUnit2Change} name="area-to" id="area-to4" />
                                        <label htmlFor="area-to4">m<sup>2</sup></label>
                                    </span>
                                    <span>
                                        <input type="radio" value="Dam2" className="radio-input" onChange={handleUnit2Change} name="area-to" id="area-to5" />
                                        <label htmlFor="area-to5">dam<sup>2</sup></label>
                                    </span>
                                    <span>
                                        <input type="radio" value="Hm2" className="radio-input" onChange={handleUnit2Change} name="area-to" id="area-to6" />
                                        <label htmlFor="area-to6">hm<sup>2</sup></label>
                                    </span>
                                    <span>
                                        <input type="radio" value="Km2" className="radio-input" onChange={handleUnit2Change} name="area-to" id="area-to7" />
                                        <label htmlFor="area-to7">km<sup>2</sup></label>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        } else if (selectedUnit === "Mass") {
            return (
                <>
                    <h2 className="unit-title"> Convert Mass</h2>
                    <div className="operation-space">
                        <div className="from-to-container">
                            <div className="title-container">
                                <h3>Enter Value</h3>
                                <img src="src\assets\ruler.png" />
                            </div>

                            <div className="from-input-container">
                                <input type="number" onChange={handleValue1Change} className="units-input" value={value1} placeholder="0" />
                                <span className="ruler-container"> <img src="src\assets\ruler.png" />  </span>
                            </div>

                            <div className="list-units-container">
                                <span>
                                    <input type="radio" value="Mg" className="radio-input" onChange={handleUnit1Change} name="mass-from" id="mass-from1" />
                                    <label htmlFor="mass-from1">mg</label>
                                </span>
                                <span>
                                    <input type="radio" value="Cg" className="radio-input" onChange={handleUnit1Change} name="mass-from" id="mass-from2" />
                                    <label htmlFor="mass-from2">cg</label>
                                </span>
                                <span>
                                    <input type="radio" value="Dg" className="radio-input" onChange={handleUnit1Change} name="mass-from" id="mass-from3" />
                                    <label htmlFor="mass-from3">dg</label>
                                </span>
                                <span>
                                    <input type="radio" value="G" className="radio-input" onChange={handleUnit1Change} name="mass-from" id="mass-from4" />
                                    <label htmlFor="mass-from4">g</label>
                                </span>
                                <span>
                                    <input type="radio" value="Dag" className="radio-input" onChange={handleUnit1Change} name="mass-from" id="mass-from5" />
                                    <label htmlFor="mass-from5">dag</label>
                                </span>
                                <span>
                                    <input type="radio" value="Hg" className="radio-input" onChange={handleUnit1Change} name="mass-from" id="mass-from6" />
                                    <label htmlFor="mass-from6">hg</label>
                                </span>
                                <span>
                                    <input type="radio" value="Kg" className="radio-input" onChange={handleUnit1Change} name="mass-from" id="mass-from7" />
                                    <label htmlFor="mass-from7">kg</label>
                                </span>
                                <span>
                                    <input type="radio" value="Ton" className="radio-input" onChange={handleUnit1Change} name="mass-from" id="mass-from8" />
                                    <label htmlFor="mass-from8">t</label>
                                </span>
                            </div>
                        </div>

                        <div className="from-to-container">
                            <h3>Convert Value</h3>
                            <div>
                                <input type="number" className="units-input" value={value2} readOnly />
                            </div>
                            <div>
                                <div className="list-units-container">
                                    <span>
                                        <input type="radio" value="Mg" className="radio-input" onChange={handleUnit2Change} name="mass-to" id="mass-to1" />
                                        <label htmlFor="mass-to1">mg</label>
                                    </span>
                                    <span>
                                        <input type="radio" value="Cg" className="radio-input" onChange={handleUnit2Change} name="mass-to" id="mass-to2" />
                                        <label htmlFor="mass-to2">cg</label>
                                    </span>
                                    <span>
                                        <input type="radio" value="Dg" className="radio-input" onChange={handleUnit2Change} name="mass-to" id="mass-to3" />
                                        <label htmlFor="mass-to3">dg</label>
                                    </span>
                                    <span>
                                        <input type="radio" value="G" className="radio-input" onChange={handleUnit2Change} name="mass-to" id="mass-to4" />
                                        <label htmlFor="mass-to4">g</label>
                                    </span>
                                    <span>
                                        <input type="radio" value="Dag" className="radio-input" onChange={handleUnit2Change} name="mass-to" id="mass-to5" />
                                        <label htmlFor="mass-to5">dag</label>
                                    </span>
                                    <span>
                                        <input type="radio" value="Hg" className="radio-input" onChange={handleUnit2Change} name="mass-to" id="mass-to6" />
                                        <label htmlFor="mass-to6">hg</label>
                                    </span>
                                    <span>
                                        <input type="radio" value="Kg" className="radio-input" onChange={handleUnit2Change} name="mass-to" id="mass-to7" />
                                        <label htmlFor="mass-to7">kg</label>
                                    </span>
                                    <span>
                                        <input type="radio" value="Ton" className="radio-input" onChange={handleUnit2Change} name="mass-to" id="mass-to8" />
                                        <label htmlFor="mass-to8">t</label>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        } else if (selectedUnit === "Time") {
            return (
                <>
                    <h2 className="unit-title"> Convert Time</h2>
                    <div className="operation-space">
                        <div className="from-to-container">
                            <div className="title-container">
                                <h3>Enter Value</h3>
                                <img src="src\assets\ruler.png" />
                            </div>

                            <div className="from-input-container">
                                <input type="number" onChange={handleValue1Change} className="units-input" value={value1} placeholder="0" />
                                <span className="ruler-container"> <img src="src\assets\ruler.png" />  </span>
                            </div>

                            <div className="list-units-container">
                                <span>
                                    <input type="radio" className="radio-input" value="Ms" onChange={handleUnit1Change} name="time-from" id="time-from1" />
                                    <label htmlFor="time-from1">ms</label>
                                </span>
                                <span>
                                    <input type="radio" className="radio-input" value="S" onChange={handleUnit1Change} name="time-from" id="time-from2" />
                                    <label htmlFor="time-from2">s</label>
                                </span>
                                <span>
                                    <input type="radio" className="radio-input" value="Min" onChange={handleUnit1Change} name="time-from" id="time-from3" />
                                    <label htmlFor="time-from3">min</label>
                                </span>
                                <span>
                                    <input type="radio" className="radio-input" value="Hr" onChange={handleUnit1Change} name="time-from" id="time-from4" />
                                    <label htmlFor="time-from4">h</label>
                                </span>
                                <span>
                                    <input type="radio" className="radio-input" value="Day" onChange={handleUnit1Change} name="time-from" id="time-from5" />
                                    <label htmlFor="time-from5">d</label>
                                </span>
                                <span>
                                    <input type="radio" className="radio-input" value="Year" onChange={handleUnit1Change} name="time-from" id="time-from6" />
                                    <label htmlFor="time-from6">y</label>
                                </span>
                            </div>
                        </div>

                        <div className="from-to-container">
                            <h3>Convert Value</h3>
                            <div>
                                <input type="number" className="units-input" value={value2} readOnly />
                            </div>
                            <div>
                                <div className="list-units-container">
                                    <span>
                                        <input type="radio" className="radio-input" value="Ms" onChange={handleUnit2Change} name="time-to" id="time-to1" />
                                        <label htmlFor="time-to1">ms</label>
                                    </span>
                                    <span>
                                        <input type="radio" className="radio-input" value="S" onChange={handleUnit2Change} name="time-to" id="time-to2" />
                                        <label htmlFor="time-to2">s</label>
                                    </span>
                                    <span>
                                        <input type="radio" className="radio-input" value="Min" onChange={handleUnit2Change} name="time-to" id="time-to3" />
                                        <label htmlFor="time-to3">min</label>
                                    </span>
                                    <span>
                                        <input type="radio" className="radio-input" value="Hr" onChange={handleUnit2Change} name="time-to" id="time-to4" />
                                        <label htmlFor="time-to4">h</label>
                                    </span>
                                    <span>
                                        <input type="radio" className="radio-input" value="Day" onChange={handleUnit2Change} name="time-to" id="time-to5" />
                                        <label htmlFor="time-to5">d</label>
                                    </span>
                                    <span>
                                        <input type="radio" className="radio-input" value="Year" onChange={handleUnit2Change} name="time-to" id="time-to6" />
                                        <label htmlFor="time-to6">y</label>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        } else if (selectedUnit === "Volume") {
            return (
                <>
                    <h2 className="unit-title"> Convert Volume</h2>
                    <div className="operation-space">
                        <div className="from-to-container">
                            <div className="title-container">
                                <h3>Enter Value</h3>
                                <img src="src\assets\ruler.png" />
                            </div>

                            <div className="from-input-container">
                                <input type="number" onChange={handleValue1Change} className="units-input" value={value1} placeholder="0" />
                                <span className="ruler-container"> <img src="src\assets\ruler.png" />  </span>
                            </div>

                            <div className="list-units-container">
                                <span>
                                    <input type="radio" className="radio-input" value="Mm3" onChange={handleUnit1Change} name="volume-from" id="volume-from1" />
                                    <label htmlFor="volume-from1">mm<sup>3</sup></label>
                                </span>
                                <span>
                                    <input type="radio" className="radio-input" value="Cm3" onChange={handleUnit1Change} name="volume-from" id="volume-from2" />
                                    <label htmlFor="volume-from2">cm<sup>3</sup></label>
                                </span>
                                <span>
                                    <input type="radio" className="radio-input" value="Dm3" onChange={handleUnit1Change} name="volume-from" id="volume-from3" />
                                    <label htmlFor="volume-from3">dm<sup>3</sup></label>
                                </span>
                                <span>
                                    <input type="radio" className="radio-input" value="M3" onChange={handleUnit1Change} name="volume-from" id="volume-from4" />
                                    <label htmlFor="volume-from4">m<sup>3</sup></label>
                                </span>
                                <span>
                                    <input type="radio" className="radio-input" value="Dam3" onChange={handleUnit1Change} name="volume-from" id="volume-from5" />
                                    <label htmlFor="volume-from5">dam<sup>3</sup></label>
                                </span>
                                <span>
                                    <input type="radio" className="radio-input" value="Hm3" onChange={handleUnit1Change} name="volume-from" id="volume-from6" />
                                    <label htmlFor="volume-from6">hm<sup>3</sup></label>
                                </span>
                                <span>
                                    <input type="radio" className="radio-input" value="Km3" onChange={handleUnit1Change} name="volume-from" id="volume-from7" />
                                    <label htmlFor="volume-from7">km<sup>3</sup></label>
                                </span>
                            </div>
                        </div>

                        <div className="from-to-container">
                            <h3>Convert Value</h3>
                            <div>
                                <input type="number" className="units-input" value={value2} readOnly />
                            </div>
                            <div>
                                <div className="list-units-container">
                                    <span>
                                        <input type="radio" className="radio-input" value="Mm3" onChange={handleUnit2Change} name="volume-to" id="volume-to1" />
                                        <label htmlFor="volume-to1">mm<sup>3</sup></label>
                                    </span>
                                    <span>
                                        <input type="radio" className="radio-input" value="Cm3" onChange={handleUnit2Change} name="volume-to" id="volume-to2" />
                                        <label htmlFor="volume-to2">cm<sup>3</sup></label>
                                    </span>
                                    <span>
                                        <input type="radio" className="radio-input" value="Dm3" onChange={handleUnit2Change} name="volume-to" id="volume-to3" />
                                        <label htmlFor="volume-to3">dm<sup>3</sup></label>
                                    </span>
                                    <span>
                                        <input type="radio" className="radio-input" value="M3" onChange={handleUnit2Change} name="volume-to" id="volume-to4" />
                                        <label htmlFor="volume-to4">m<sup>3</sup></label>
                                    </span>
                                    <span>
                                        <input type="radio" className="radio-input" value="Dam3" onChange={handleUnit2Change} name="volume-to" id="volume-to5" />
                                        <label htmlFor="volume-to5">dam<sup>3</sup></label>
                                    </span>
                                    <span>
                                        <input type="radio" className="radio-input" value="Hm3" onChange={handleUnit2Change} name="volume-to" id="volume-to6" />
                                        <label htmlFor="volume-to6">hm<sup>3</sup></label>
                                    </span>
                                    <span>
                                        <input type="radio" className="radio-input" value="Km3" onChange={handleUnit2Change} name="volume-to" id="volume-to7" />
                                        <label htmlFor="volume-to7">km<sup>3</sup></label>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }
    return (
        <>
            <header>
                <a href="">
                    <img src="src\assets\logo.png" alt="" width={"120px"} />
                </a>

            </header>
            <nav >
                <input type="radio" name="unit" value="Length" onChange={handleUnitSelected} id="unit1" className="unit" defaultChecked />
                <label htmlFor="unit1">Length</label>

                <input type="radio" name="unit" value="Area" onChange={handleUnitSelected} id="unit2" className="unit" />
                <label htmlFor="unit2">Area</label>

                <input type="radio" name="unit" value="Volume" onChange={handleUnitSelected} id="unit3" className="unit" />
                <label htmlFor="unit3">Volume</label>

                <input type="radio" name="unit" value="Mass" onChange={handleUnitSelected} id="unit4" className="unit" />
                <label htmlFor="unit4">Mass</label>

                <input type="radio" name="unit" value="Time" onChange={handleUnitSelected} id="unit5" className="unit" />
                <label htmlFor="unit5">Time</label>

            </nav>
            <div id="space-of-calcul">
                {handleSpace()}

            </div>
        </>
    );
}

export default Converter