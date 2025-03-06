import React, { useEffect, useState } from 'react'
import { useRef, } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    const getPassswords = async () => {
        let req = await fetch("http://localhost:3000")
        let passswords = await req.json()
        console.log(passswords)
        setPasswordArray(passswords)
      
    }
    

    useEffect(() => {
       getPassswords()

    }, [])

    const copyText = (text) => {
        toast.info('🦄 Copied to clipboard!', {
            position: "top-center",
            autoClose: 1282,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

        navigator.clipboard.writeText(text)
    }



    const showPassword = () => {
        passwordRef.current.type = "text"
        if (ref.current.src.includes("icons/eye-close.svg")) {
            ref.current.src = "icons/eye.svg"
            passwordRef.current.type = "text"
        }
        else {
            ref.current.src = "icons/eye-close.svg"
            passwordRef.current.type = "password"
        }
    }

    const savePassword = async () => {
        
        setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
        // If any such id exists in the db, delete it 
        await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: form.id }) })

        setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
        await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, id: uuidv4() }) })
        // localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
        // console.log([...passwordArray, form])
        setForm({ site: "", username: "", password: "" })
        toast.success('Password saved!', {
            position: "top-center",
            autoClose: 1282,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            

        });
    }
    const deletePassword = async (id) => {
        console.log("Deleting password with id ", id)
        let c = confirm("Do you really want to delete this password?")
        if (c) {
            setPasswordArray(passwordArray.filter(item => item.id !== id))
            
            await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })

        
        toast.warn('Deleted successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",

        });
    }
    }
    const editPassword = (id) => {
        //  console.log(" Edit  password with id", id)
        // setForm(passwordArray.filter(i => i.id === id)[0])
        //  setPasswordArray(passwordArray.filter(item => item.id !== id))
        setForm({ ...passwordArray.filter(i => i.id === id)[0], id: id })
        setPasswordArray(passwordArray.filter(item => item.id !== id))

    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })

    }


    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={2100}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"

            />
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>


            <div className=" mx-auto mycontainer">
                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-400'>&lt;</span>
                    <span className='text-white'>Rbm</span><span className='text-green-400'>BR/&gt;</span>
                </h1>

                <p className='text-green-400 text-lg text-center font-serif'>Your own password Manager</p>
                <div className=' flex flex-col p-4 text-black gap-8 items-center'>
                    <input value={form.site} onChange={handleChange} placeholder='Enter your website URL' className='rounded-full  border border-green-500 w-full p-4 py-1' type="text" name="site" />
                    <div className="flex w-full justify-between gap-8 ">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full  border border-green-500 w-full p-4 py-1' type="text" name="username" />
                        <div className="relative">

                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full  border border-green-500 w-full p-4 py-1' type="password" name="password" />
                            <span className='absolute right-2 top-[4px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-1' width={26} src="icons/eye.svg" alt="" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-4 py-2 w-fit border- border-green-900'>
                        <lord-icon
                            src="https:cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">

                        </lord-icon>
                        Save data</button>
                </div>
                <div className="passswords">
                    <h2 className='text-white font-bold text-2xl'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div className='text-white'>No passswords to show</div>}
                    {passwordArray.length != 0 && <table className=" text-white table-auto w-full rounded-lg overflow-hidden">
                        <thead className='text-white bg-green-700'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-200 text-black'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>

                                    <td className=' py-2 border border-white text-center min-w-32'> <a href={item.site} target='_blank'></a>
                                        <div className='flex items-center justify-center'>
                                            <span>{item.site}</span>
                                            <div className='size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                                                <dotlottie-player src="https:lottie.host/17148a1e-c556-4e53-ac79-98e4b563de46/brGBlQoH5i.lottie" background="transparent" speed="1" style={{ "width": "35px", "height": "35px", "paddingBottom": "4px", "paddingLeft": "4px" }} loop autoplay ></dotlottie-player>
                                            </div>
                                        </div>

                                    </td>
                                    <td className='py-2 border border-white text-center min-w-32'>
                                        <div className='flex items-center justify-center'>
                                            <span>{item.username}</span>
                                            <div className='size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                                                <dotlottie-player src="https:lottie.host/17148a1e-c556-4e53-ac79-98e4b563de46/brGBlQoH5i.lottie" background="transparent" speed="1" style={{ "width": "35px", "height": "35px", "paddingBottom": "4px", "paddingLeft": "4px" }} loop autoplay ></dotlottie-player>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='py-2 border border-white text-center min-w-32'>
                                        <div className='flex items-center justify-center'>
                                            <span>{item.password}</span>
                                            <div className='size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                                                <dotlottie-player src="https:lottie.host/17148a1e-c556-4e53-ac79-98e4b563de46/brGBlQoH5i.lottie" background="transparent" speed="1" style={{ "width": "35px", "height": "35px", "paddingBottom": "4px", "paddingLeft": "4px" }} loop autoplay ></dotlottie-player>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='py-2 border border-white text-center min-w-32' onClick={() => { editPassword(item.id) }}>
                                        <span className='cursor-pointer mx-3'><lord-icon
                                            src="https://cdn.lordicon.com/nwfpiryp.json"
                                            trigger="loop-on-hover"
                                            state="hover-line"
                                            stroke="bold"
                                            colors="primary:#ebe6ef,secondary:#30e849,tertiary:#242424,quaternary:#000000"
                                            style={{ "width": "35px", "height": "25px" }}>
                                        </lord-icon></span>
                                        <span className='cursor-pointer mx-3' onClick={() => { deletePassword(item.id) }}><lord-icon
                                            src="https://cdn.lordicon.com/skkahier.json"
                                            trigger="loop-on-hover"
                                            style={{ "width": "25px", "height": "25px" }}>
                                        </lord-icon></span>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                    }

                </div>
            </div>
        </>



    )
}

export default Manager
