export class ContactModel {
    static contacts =  [
        { _id: 'a', name: 'Teo', phone: '9128321' },
        { _id: 'b', name: 'To', phone: '103948123' },
        { _id: 'c', name: 'Tun', phone: '4312542' },
        { _id: 'd', name: 'Ti', phone: '452322' },
    ];

    static getContactById(_id) {
        return ContactModel.contacts.find(c => c._id === _id);
    }
}
