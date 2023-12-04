import { api } from "./api";



export const getUserVolunteerHistory = async (userId) => {
  try {
    const res = await api.get(`/user/${userId} / event`);

    return res.data.data;
  } catch (error) {
    return error;
  }
};


export const getKecamatan = async () => {
  try {
    const res = await api.get(`/kecamatan`);
    return res.data.data;
  } catch (error) {
    return error;
  }
}

export const getKelurahan = async (id) => {
  try {
    console.log(id)
    const res = await api.get(`/kecamatan/${id}/desa-kelurahan`);
    return res.data.data;
  } catch (error) {
    return error;
  }
}

export const getStreetLamp = async (kelurahan) => {
  try {
    const res = await api.get(`/street-light?desa_kelurahan_id=${kelurahan}`);
    return res.data.data;
  } catch (error) {
    return error;
  }
}

export const getReport = async ({ userId = 1 }) => {
  try {
    const res = await api.get(`/report/user/${userId}`);
    return res.data.data;
  } catch (error) {
    return error;
  }
}

export const postReport = async ({ id, type, description, images }) => {
  try {
    const res = await api.post(`/report`, {
      street_light_id: id,
      type: type,
      description: description,
      images: images,
    }, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + '',
      }
    });
    return res.data.data;
  } catch (error) {
    return error;
  }
}