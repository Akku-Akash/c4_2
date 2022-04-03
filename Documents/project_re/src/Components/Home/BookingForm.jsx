import { useForm } from "react-hook-form";
import { Slider1 } from "./Slider1";
import { Slider1images } from "./Slider1images";


export function BookingForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => alert(JSON.stringify(data));
    return (
        <section>
            <div id="blue">
                <div id="form">
                    <div>
                        <div id="b1">
                            <p id="p1">Find Flights</p>
                        </div>
                        <div id="formdata">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div id="radios">
                                    <div>
                                        <div className="rad1">
                                            <input
                                                type={"radio"}
                                                value="Round Trip"
                                                className="form-check-input"
                                                {...register("tripType", {
                                                    required: {
                                                        value: true,
                                                        message: 'Trip type is required'
                                                    }
                                                })}
                                            /> <label >Round Trip</label>
                                        </div>
                                        <div className="err">
                                            {errors.tripType && <span>{errors.tripType.message}</span>}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="rad1">
                                            <input
                                                type={"radio"}
                                                value="One Way"
                                                className="form-check-input"
                                                {...register("TripType", {
                                                    required: {
                                                        // value: true,
                                                        message: 'Trip type is required'
                                                    }
                                                })}
                                            /> <label >One Way</label>
                                        </div>
                                        <div className="err">
                                            {errors.TripType && <span>{errors.TripType.message}</span>}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div>
                                            <select className="ipbox"
                                                {...register("depart", {
                                                    required: {
                                                        value: true,
                                                        message: 'departure city is required'
                                                    }
                                                })}
                                            >
                                                <option >From</option>
                                                <option value="Chennai">Chennai</option>
                                                <option value="Delhi">Delhi</option>
                                                <option value="Mumbai">Mumbai</option>
                                                <option value="Bangalore">Bangalore</option>
                                                <option value="Hyderabad">Hyderabad</option>
                                            </select>
                                        </div>
                                        <div className="err">
                                            {errors.depart && <span>{errors.depart.message}</span>}
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <select className="ipbox"
                                                {...register("arrival", {
                                                    required: {
                                                        value: true,
                                                        message: 'arrival city is required'
                                                    }
                                                })}
                                            >
                                                <option>To</option>
                                                <option value="Shimla">Shimla</option>
                                                <option value="Darjeeling">Darjeeling</option>
                                                <option value="Calcutta">Calcutta</option>
                                                <option value="Patna">Patna</option>
                                                <option value="Lucknow">Lucknow</option>
                                            </select>
                                        </div>
                                        <div className="err">
                                            {errors.arrival && <span>{errors.arrival.message}</span>}
                                        </div>
                                    </div>
                                    <div id="dateboxes">
                                        <div>
                                            <div className="db">
                                                <p className="p1">DEPART DATE</p>
                                                <input
                                                    type={"date"}
                                                    className="datebox"
                                                    {...register("depart date", {
                                                        required: {
                                                            value: true,
                                                            message: 'depart date is required'
                                                        }
                                                    })}
                                                />
                                            </div>
                                            <div></div>
                                        </div>
                                        <div>
                                            <div className="db">
                                                <p className="p1">RETURN DATE</p>
                                                <input
                                                    type={"date"}
                                                    className="datebox"
                                                    {...register("arrival date", {
                                                        required: {
                                                            value: true,
                                                            message: 'arrival date is required'
                                                        }
                                                    })}
                                                />
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div id="lastb">

                                        <div>
                                            <div>
                                                <p id="p">TRAVELLERS</p>
                                                <select
                                                    className="travelbox"
                                                    {...register("travellers", {
                                                        required: {
                                                            value: true,
                                                            message: 'travellers is required'
                                                        }
                                                    })}
                                                >
                                                    <option>No of Travellers</option>
                                                    <option value="1 Traveller">1 Traveller</option>
                                                    <option value="2 Travellers">2 Travellers</option>
                                                    <option value="3 Travellers">3 Travellers</option>
                                                    <option value="4 Travellers">4 Travellers</option>
                                                    <option value="5 Travellers">5 Travellers</option>
                                                    <option value="6 Travellers">6 Travellers</option>
                                                    <option value="7 Travellers">7 Travellers</option>
                                                    <option value="8 Travellers">8 Travellers</option>
                                                    <option value="9 Travellers">9 Travellers</option>
                                                    <option value="10 Travellers">10 Travellers</option>
                                                </select>
                                            </div>
                                            <div></div>
                                        </div>

                                        <div>
                                            <input id="sub" type={"submit"} value={"Search"} />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div>
                        <Slider1 slides={Slider1images} />
                    </div>
                </div>

            </div>
        </section>
    )
}
