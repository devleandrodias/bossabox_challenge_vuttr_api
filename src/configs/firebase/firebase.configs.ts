import * as firebaseService from './firebase-service-account.json';

export const firebaseParams = {
  type: firebaseService.type,
  projectId: firebaseService.project_id,
  privateKeyId: firebaseService.private_key_id,
  privateKey: firebaseService.private_key,
  clientEmail: firebaseService.client_email,
  clientId: firebaseService.client_id,
  authUri: firebaseService.auth_uri,
  tokenUri: firebaseService.token_uri,
  authProviderX509CertUrl: firebaseService.auth_provider_x509_cert_url,
  clientX509CertUrl: firebaseService.client_x509_cert_url,
};
