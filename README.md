<div align="center">

# AWS Serverless Items App

### Full-stack serverless CRUD application built on AWS

[![AWS](https://img.shields.io/badge/AWS-Serverless-orange?style=for-the-badge&logo=amazonaws)](https://aws.amazon.com/)
[![React](https://img.shields.io/badge/React-TypeScript-20232A?style=for-the-badge&logo=react)](https://react.dev/)
[![API Gateway](https://img.shields.io/badge/API-Gateway-8C4FFF?style=for-the-badge&logo=amazonapigateway)](https://aws.amazon.com/api-gateway/)
[![Lambda](https://img.shields.io/badge/AWS-Lambda-FF9900?style=for-the-badge&logo=awslambda)](https://aws.amazon.com/lambda/)
[![DynamoDB](https://img.shields.io/badge/AWS-DynamoDB-4053D6?style=for-the-badge&logo=amazondynamodb)](https://aws.amazon.com/dynamodb/)
[![S3](https://img.shields.io/badge/AWS-S3-569A31?style=for-the-badge&logo=amazons3)](https://aws.amazon.com/s3/)
[![CloudFormation](https://img.shields.io/badge/IaC-CloudFormation-3B48CC?style=for-the-badge&logo=amazonaws)](https://aws.amazon.com/cloudformation/)

A production-style cloud project that combines a static React frontend hosted on Amazon S3 with a serverless backend powered by API Gateway, Lambda, DynamoDB, and CloudFormation.

</div>

---

## Overview

This project is a serverless web application for managing items through a simple CRUD workflow.  
It was built to demonstrate practical cloud engineering skills, including infrastructure provisioning, frontend-backend integration, API design, deployment, and troubleshooting in AWS.

The application allows users to:

- view items stored in DynamoDB
- create new items from the frontend
- delete items from the list
- interact with a real AWS-hosted API from a static website

---

## Preview

## Application

![DevOps Serverless](https://github.com/user-attachments/assets/eb62a46a-93c9-4855-a6bc-4c55a07c5ce9)

## Architecture

<img width="1067" height="611" alt="{FE42BEB0-34A8-4075-9E74-E18F9C8CC53F}" src="https://github.com/user-attachments/assets/f9544ff5-d0aa-464d-a95a-2c6041eb4a91" />


---


## Architecture

This solution uses a fully serverless AWS architecture:

- **Amazon S3** hosts the frontend as a static website
- **Amazon API Gateway** exposes the HTTP API
- **AWS Lambda** runs the backend business logic
- **Amazon DynamoDB** stores the application data
- **AWS CloudFormation** provisions the backend resources as Infrastructure as Code

### Request Flow

```text
User Browser
   ↓
React Frontend (S3)
   ↓
API Gateway
   ↓
AWS Lambda
   ↓
DynamoDB
