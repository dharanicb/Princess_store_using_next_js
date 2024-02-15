import Input from '@/Components/Input.js'
import PhoneExtensionSelectBar from '@/Components/Input.js/PhoneExtensionSelectBar'
import OrderDetails from '@/Components/OrderDetails'
import { countriesList } from '@/Components/utils/constants/countriesList'
import { addUser, addUserDetails } from '@/Store/Reducers/productSlice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const ProfilePage = () => {
    const [formData, setFormData] = useState({ id: 1, phone_ext: "", firstName: "", lastName: "", email: "", mobile: "", address_line_one: "", address_line_two: "", pincode: "", country: "", state: "", })
    const [phoneExt, setPhoneExt] = useState(`${formData?.phone_ext ? formData.phone_ext : "+1"}`);
    const [error, setError] = useState(true);
    const [container, setContainer] = useState(false)
    const [state, setState] = useState([]);

    const dispatch = useDispatch();

    const validatePhonecurrentIndex = (phonecurrentIndex) => {
        const phonecurrentIndexPattern = /^\d{10}$/; // Validates a 10-digit phone currentIndex

        return phonecurrentIndexPattern.test(phonecurrentIndex);
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("this is formdata", formData)
        // dispatch(addUserDetails({formData}))
        // dispatch(addUser(formData))

    }

    const handleCountry = (e) => {
        const getcountryId = e.target.value;
        //* importent--> if you want country id you can use next line send to api id(and change to Input->select keyValue also),  otherwise send value country_name  
        // const getStatedata = countriesList.find(country => country.country_id === getcountryId).states;
        const getStatedata = countriesList.find(country => country.country_name === getcountryId).states;
        setState(getStatedata);
        setFormData({ ...formData, country: e.target.value })
    }


    return (
        <div className=''>
            <div className='ml-40'>
                <div className='font-heading md:text-[28px] text-[24px] text-[#240253] font-semibold md:pl-0 md:inline hidden'>
                    Contact Details
                    <p className='body-text md:text-[15px] text-[14px] font-normal text-[#240253]'>Tell us about yourself</p>
                </div>
            </div>
            <div className='w-screen h-screen flex justify-between px-10'>
                <div className='flex w-[70%] flex-col'>
                    <button className='text-[#4343a1]' onClick={() => setContainer(!container)}>+ Add your Details</button>
                    {
                        container &&
                        // <div className='drop-shadow-md'>
                        <form className='md:mt-[48px]  mt-[24px] space-y-4' style={{ minHeight: "0px", height: "", transitionDuration: "360ms" }} onSubmit={handleSubmit}>
                            <div className='flex gap-6 md:ml-44'>
                                <Input type={"text"} label={"First Name"} className={"w-[30%] z-3"} ReadInput={"border-2 border-slate-300"}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                                <Input type={"text"} label={"Last Name"} className={"w-[30%]"}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                />
                            </div>
                            <div className='flex gap-4 md:ml-44'>
                                <Input type={"email"} label={"Email"} className={"w-[30%] mt-4"}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                                <Input type={"number"} label={"ZipCode"} className={"w-[30%] mt-4"}
                                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                                />
                            </div>
                            <div className='flex gap-6 md:ml-44'>
                                <Input className={"w-[30%]"} type={"address"} label={"Address"}
                                    onChange={(e) => setFormData({ ...formData, address_line_one: e.target.value })} />
                                <Input className={"w-[30%]"} type={"address"} label={"Address"}
                                    onChange={(e) => setFormData({ ...formData, address_line_two: e.target.value })} />
                            </div>
                            <div className='flex gap-6 md:ml-44'>
                                <Input ModuleName={countriesList}
                                    value={formData.country}
                                    className={"w-[30%]"}
                                    // keyValue={"country_id"}
                                    keyValue={"country_name"}
                                    type={"select"}
                                    keyName={"country_name"}
                                    optionValue={"--Select Country--"}
                                    onChange={(e) => handleCountry(e)}
                                    label={"Country"}
                                    name={"country"}
                                />
                                <Input ModuleName={state}
                                    value={formData.state}
                                    className={"w-[30%]"}
                                    type={"select"}
                                    // keyValue={"state_id"}
                                    keyValue={"state_name"}
                                    keyName={"state_name"}
                                    optionValue={"--Select State--"}
                                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                    label={"State"}
                                    name={"states"}
                                />
                            </div>
                            <div className='flex md:ml-44 md:w-[102%]'>
                                <PhoneExtensionSelectBar
                                    type={"number"}
                                    label={"Mobile Number*"}
                                    inputStyle={"w-[100%] ml-2 flex-col"}
                                    className={"dark:border-gray-900 border-[solid] border-gray-800 py-2 px-4 border-2"}
                                    phoneExt={phoneExt}
                                    error={error}
                                    onChange={(e) => {
                                        setFormData({ ...formData, phone_ext: phoneExt, mobile: e.target.value })
                                        setError(validatePhonecurrentIndex(e.target.value))
                                    }}
                                    selectPhoneExt={(item) => setPhoneExt(item)}
                                    labelStyle={"text-sm"}
                                />
                            </div>
                            <div className='mt-0 md:ml-44'>
                                <button type='submit' className='bg-[#6c6c9b] w-[160px] text-white uppercase px-4 py-2 rounded-md my-10' style={{ marginBlockStart: "initial" }}>Submit</button>
                            </div>
                        </form>
                        // </div>
                    }
                </div>
                <div className='w-[30%] flex flex-col'>
                    <OrderDetails />
                    <div className='text-right'>
                        <button className='bg-[#6c6c9b] w-[260px] text-white uppercase px-4 py-2 rounded-md my-10'>Proceed to Payment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage