import React from 'react';
import rightslogo from '../images/leftarrow.svg';
import leftslogo from '../images/r-side.svg';
import search from '../images/search.svg';
import addclient from '../images/plus.svg';
import squrepluse from '../images/square-plus.svg';
import restart from '../images/restart1.svg';
import delete1 from '../images/delete1.svg';

const MainContent = () => {
    return (
        <div className="flex-1 p-4 bg-white h-full flex flex-col">
            {/* Header Section */}
            <div className="flex flex-wrap items-center mb-4 gap-2 sm:justify-center lg:justify-start">
                <h2 className="text-lg font-medium">Clients</h2>
                <div className="flex items-center gap-2 sm:justify-center">
                    <label className="pl-5">Show</label>
                    <select className="border rounded-md py-1.5 px-3 shadow-md mx-1">
                        <option>10</option>
                        <option>20</option>
                        <option>25</option>
                        <option>30</option>
                    </select>
                    <span className="p-2">entries</span>
                </div>
                <div className="flex items-center w-full lg:w-auto lg:absolute lg:right-4 mt-2 lg:mt-0 sm:justify-center">
                    <div className="flex border border-gray-200 rounded shadow-md mr-4">
                        <input 
                            placeholder="Search"
                            className="w-[150px] h-[35px] px-3 py-1.5" 
                        />
                        <img src={search} alt="search icon" className="pr-2" />
                    </div>
                    <button className="flex items-center px-2 py-1.5 bg-[#882EFD] text-white border rounded sm:justify-center">
                        <img src={addclient} alt="add client" />
                        <span className="ml-2">Add Client</span>
                    </button>
                </div>
            </div>

            <div className="rounded shadow-lg overflow-visible">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border">
                        <thead>
                            <tr className="bg-gray-100">
                            <th className="py-2 pl-4  flex  gap-2">
                            <input type="checkbox" className='mr-3' />
                            Email</th>
                                <th className="py-2 px-4">Client</th>
                                <th className="py-2 px-4">Role</th>
                                <th className="py-2 px-4">Status</th>
                                <th className="py-2 px-4">Created</th>
                                <th className="py-2 px-4">Actions</th>
                                <th className="p-4">
                                    <img src={squrepluse} alt="squreplus" />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b text-sm">
                                <td className="py-2 pl-4 flex gap-2">
                                    <input type="checkbox" className="mr-3" />
                                    johnsmith+testing@gmail.com
                                </td>
                                <td className="py-2 px-4">John Smith</td>
                                <td className="py-2 px-4">Owner</td>
                                <td className="py-2 px-4">Registered</td>
                                <td className="py-2 px-4">July 25, 2024</td>
                                <td className="py-2 px-5 flex gap-2">
                                    <img src={restart} alt="restart" />
                                    <img src={delete1} alt="delete" />
                                </td>
                            </tr>
                            <tr className="border-b text-sm">
                                <td className="py-2 pl-4 flex gap-2">
                                    <input type="checkbox" className="mr-3" />
                                    watsonp+testing@gmail.com
                                </td>
                                <td className="py-2 px-4">Watson P.</td>
                                <td className="py-2 px-4">Client</td>
                                <td className="py-2 px-4">Invited</td>
                                <td className="py-2 px-4">July 21, 2024</td>
                                <td className="py-2 px-5 flex gap-2">
                                    <img src={restart} alt="restart" />
                                    <img src={delete1} alt="delete" />
                                </td>
                            </tr>
                            <tr className="border-b text-sm">
                                <td className="py-2 pl-4 flex gap-2">
                                    <input type="checkbox" className="mr-3" />
                                    marksmith+testing@gmail.com
                                </td>
                                <td className="py-2 px-4">Mark Smith</td>
                                <td className="py-2 px-4">Client</td>
                                <td className="py-2 px-4">Invited</td>
                                <td className="py-2 px-4">July 20, 2024</td>
                                <td className="py-2 px-5 flex gap-2">
                                    <img src={restart} alt="restart" />
                                    <img src={delete1} alt="delete" />
                                </td>
                            </tr>
                            <tr className="border-b text-sm">
                                <td className="py-2 pl-4 flex gap-2">
                                    <input type="checkbox" className="mr-3" />
                                    jamesmark+testing@gmail.com
                                </td>
                                <td className="py-2 px-4">James Mark</td>
                                <td className="py-2 px-4">Client</td>
                                <td className="py-2 px-4">Invited</td>
                                <td className="py-2 px-4">July 20, 2024</td>
                                <td className="py-2 px-5 flex gap-2">
                                    <img src={restart} alt="restart" />
                                    <img src={delete1} alt="delete" />
                                </td>
                            </tr>
                            <tr className="border-b text-sm">
                                <td className="py-2 pl-4 flex gap-2">
                                    <input type="checkbox" className="mr-3" />
                                    lizawarner+testing@gmail.com
                                </td>
                                <td className="py-2 px-4">Liza Warner</td>
                                <td className="py-2 px-4">Client</td>
                                <td className="py-2 px-4">Invited</td>
                                <td className="py-2 px-4">July 20, 2024</td>
                                <td className="py-2 px-5 flex gap-2">
                                    <img src={restart} alt="restart" />
                                    <img src={delete1} alt="delete" />
                                </td>
                            </tr>
                            <tr className="border-b text-sm">
                                <td className="py-2 pl-4 flex gap-2">
                                    <input type="checkbox" className="mr-3" />
                                    sandssmith+testing@gmail.com
                                </td>
                                <td className="py-2 px-4">Sands Smith</td>
                                <td className="py-2 px-4">Client</td>
                                <td className="py-2 px-4">Invited</td>
                                <td className="py-2 px-4">July 20, 2024</td>
                                <td className="py-2 px-5 flex gap-2">
                                    <img src={restart} alt="restart" />
                                    <img src={delete1} alt="delete" />
                                </td>
                            </tr>
                            <tr className="border-b text-sm">
                                <td className="py-2 pl-4 flex gap-2">
                                    <input type="checkbox" className="mr-3" />
                                    kimsmith+testing@gmail.com
                                </td>
                                <td className="py-2 px-4">Kim Smith</td>
                                <td className="py-2 px-4">Client</td>
                                <td className="py-2 px-4">Registered</td>
                                <td className="py-2 px-4">July 20, 2024</td>
                                <td className="py-2 px-5 flex gap-2">
                                    <img src={restart} alt="restart" />
                                    <img src={delete1} alt="delete" />
                                </td>
                            </tr>
                            <tr className="border-b text-sm">
                                <td className="py-2 pl-4 flex gap-2">
                                    <input type="checkbox" className="mr-3" />
                                    joesmith+testing@gmail.com
                                </td>
                                <td className="py-2 px-4">James Mark</td>
                                <td className="py-2 px-4">Client</td>
                                <td className="py-2 px-4">Registered</td>
                                <td className="py-2 px-4">July 20, 2024</td>
                                <td className="py-2 px-5 flex gap-2">
                                    <img src={restart} alt="restart" />
                                    <img src={delete1} alt="delete" />
                                </td>
                            </tr>
                            <tr className="border-b text-sm">
                                <td className="py-2 pl-4 flex gap-2">
                                    <input type="checkbox" className="mr-3" />
                                    johns+testing@gmail.com
                                </td>
                                <td className="py-2 px-4">John S.</td>
                                <td className="py-2 px-4">Client</td>
                                <td className="py-2 px-4">Registered</td>
                                <td className="py-2 px-4">July 20, 2024</td>
                                <td className="py-2 px-5 flex gap-2">
                                    <img src={restart} alt="restart" />
                                    <img src={delete1} alt="delete" />
                                </td>
                            </tr>
                            <tr className="border-b text-sm">
                                <td className="py-2 pl-4 flex gap-2">
                                    <input type="checkbox" className="mr-3" />
                                    maryjones+testing@gmail.com
                                </td>
                                <td className="py-2 px-4">Mary Jones</td>
                                <td className="py-2 px-4">Client</td>
                                <td className="py-2 px-4">Registered</td>
                                <td className="py-2 px-4">July 20, 2024</td>
                                <td className="py-2 px-5 flex gap-2">
                                    <img src={restart} alt="restart" />
                                    <img src={delete1} alt="delete" />
                                </td>
                            </tr>
                            <tr className="border-b text-sm">
                                <td className="py-2 pl-4 flex gap-2">
                                    <input type="checkbox" className="mr-3" />
                                    alicewhite+testing@gmail.com
                                </td>
                                <td className="py-2 px-4">Alice White</td>
                                <td className="py-2 px-4">Client</td>
                                <td className="py-2 px-4">Registered</td>
                                <td className="py-2 px-4">July 20, 2024</td>
                                <td className="py-2 px-5 flex gap-2">
                                    <img src={restart} alt="restart" />
                                    <img src={delete1} alt="delete" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between items-center p-4 bg-white">
                    <span className="text-gray-500">Showing 1 to 10 of 10 entries</span>
                    <div className="flex space-x-2">
                        <button>
                            <img src={rightslogo} alt="right arrow" />
                        </button>
                        <button className="w-7 h-7 border-2 border-[#882EFD] rounded-full bg-[#882EFD] text-white">1</button>
                        <button>
                            <img src={leftslogo} alt="left arrow" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center mt-4">
                <p className="ml-5 text-sm">Copyright ©2024 Diginnovators</p>
                <div className="flex gap-4 text-[#882EFD]">
                    <p>Privacy Policy</p>
                    <p>Terms of Conditions</p>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
