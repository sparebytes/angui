# Dreams of Modular Systems

## Models

- [ ] Json Schema Generation (One-off build)
- [ ] AJV Validation Generation  (One-off build)
- [ ] Json Schema and AJV Validation Generation (Watch)
- [ ] Concern, Will the AJV validation functions be large and slow load times?
- [ ] Should the models be forced to live outside API and UI, or could they also live inside the API/UI?

## API

- Database
  - Uuid for Ids
  - Debugging
    - [ ] Slow Query Logging
  - Auditing
    - [ ] Record Insert/Update/Deleted Audit Logging
      - [ ] Value Changes
      - [ ] Query?
      - [ ] When
      - [ ] Who
      - [ ] RequestId
  - Typeorm
    - [ ] Request-Scoped Transactions
    - [ ] Nested Transactions
    - [ ] Code First
      - [ ] Bug: Gen is buggy if Entities span multiple schemas
- Authentication
  - [ ] ... Explore
  - [ ] JWT
- Authorization
  - [ ] ... Explore
- Microservices
  - [ ] ... Explore
- HTTP Request Logging
  - [ ] ... Explore
- File Server
  - [ ] ... Explore
  - [ ] AWS Adapter
  - [ ] Local File Storage Adapter
  - [ ] Database Adapter
  - [ ] Encryption/Decryption
- Image Server
- Modules
  - [x] address
  - [ ] person
  - [ ] user

## UI

- ...
