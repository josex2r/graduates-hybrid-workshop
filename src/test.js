import { Platform, PermissionsAndroid } from 'react-native';

export default async function requestContactsPermission() {
  if (Platform.OS === 'ios') {
    return await readContactsIOS();
  }

  return await readContactsAndroid();
}

async function readContactsIOS() {
  const result = await new Promise((resolve) => {
    Contacts.checkPermission((err, permission) => {
      if (err) resolve(false);

      // Contacts.PERMISSION_AUTHORIZED || Contacts.PERMISSION_UNDEFINED || Contacts.PERMISSION_DENIED
      if (permission === 'undefined') {
        Contacts.requestPermission((err, permission) => {
          // ...
          if (permission === 'authorized') {
            // yay!
            resolve(true);
          }
          if (permission === 'denied') {
            // x.x
            resolve(false);
          }
        })
      }
      if (permission === 'authorized') {
        // yay!
        resolve(true);
      }
      if (permission === 'denied') {
        // x.x
        resolve(false);
      }
    })
  });

  return result;
}

async function readContactsAndroid() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'Cool Photo App Contacts Permission',
        'message': 'Cool Photo App needs access to your contacts.'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the contacts")
      return true;
    } else {
      console.log("Contacts permission denied")
      return false;
    }
  } catch (err) {
    console.warn(err)
    return false;
  }
}
